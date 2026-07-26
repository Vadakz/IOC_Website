from pathlib import Path

import pdfplumber
import pypdfium2 as pdfium
from PIL import Image, ImageDraw


SOURCES = {
    "company-profile": Path(
        r"C:\Users\Akshay Anto Vadakkan\OneDrive - Eastern Catering & Operation Co"
        r"\Desktop\IOC Company profile\3.0-IOC Company Profile.pdf"
    ),
    "services-flyer": Path(
        r"C:\Users\Akshay Anto Vadakkan\OneDrive - Eastern Catering & Operation Co"
        r"\Desktop\IOC Company profile\3.1-IOC Services Flyer.pdf"
    ),
}

OUTPUT = Path(__file__).resolve().parent

for name, source in SOURCES.items():
    with pdfplumber.open(source) as pdf:
        text_parts = []
        print(f"{name}: {len(pdf.pages)} pages")
        for page_number, page in enumerate(pdf.pages, start=1):
            text_parts.append(
                f"\n\n===== PAGE {page_number} =====\n\n{page.extract_text() or ''}"
            )
        (OUTPUT / f"{name}.txt").write_text(
            "".join(text_parts), encoding="utf-8"
        )

    document = pdfium.PdfDocument(source)
    render_dir = OUTPUT / name
    render_dir.mkdir(parents=True, exist_ok=True)
    for page_index in range(len(document)):
        page = document[page_index]
        bitmap = page.render(scale=1.5)
        bitmap.to_pil().save(render_dir / f"page-{page_index + 1:02d}.png")

    page_files = sorted(render_dir.glob("page-*.png"))
    thumbnails = []
    for page_file in page_files:
        image = Image.open(page_file).convert("RGB")
        image.thumbnail((300, 420))
        thumbnails.append((page_file.stem, image.copy()))

    columns = 4
    cell_width, cell_height = 320, 460
    rows = (len(thumbnails) + columns - 1) // columns
    sheet = Image.new(
        "RGB", (columns * cell_width, rows * cell_height), "white"
    )
    draw = ImageDraw.Draw(sheet)
    for index, (label, thumbnail) in enumerate(thumbnails):
        x = (index % columns) * cell_width + 10
        y = (index // columns) * cell_height + 25
        sheet.paste(thumbnail, (x, y))
        draw.text((x, 5 + (index // columns) * cell_height), label, fill="black")
    sheet.save(OUTPUT / f"{name}-contact-sheet.jpg", quality=88)
