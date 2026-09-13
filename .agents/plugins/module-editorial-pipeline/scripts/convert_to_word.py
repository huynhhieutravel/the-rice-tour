#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script xuất bản bài viết từ Markdown sang Microsoft Word (.docx) chuyên nghiệp
Tuân thủ SOP: Typography Arial/Calibri, Header Deep Navy (#1B365D), Meta block,
Table styling có header màu Navy, callouts, danh mục và tổng hợp Master Collection.
"""

import os
import re
import markdown
from bs4 import BeautifulSoup, NavigableString, Tag
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

NAVY_HEX = "1B365D"
GOLD_HEX = "D97706"
SLATE_HEX = "475569"
LIGHT_BG_HEX = "F8FAFC"
BORDER_HEX = "CBD5E1"

COLOR_NAVY = RGBColor(27, 54, 93)      # #1B365D
COLOR_SLATE = RGBColor(71, 85, 105)    # #475569
COLOR_DARK = RGBColor(30, 41, 59)      # #1E293B
COLOR_AMBER = RGBColor(217, 119, 6)    # #D97706

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=120, bottom=120, left=180, right=180):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def set_table_borders(table):
    tblPr = table._element.xpath('w:tblPr')
    if tblPr:
        borders = parse_xml(
            f'<w:tblBorders {nsdecls("w")}>'
            f'<w:top w:val="single" w:sz="4" w:space="0" w:color="{BORDER_HEX}"/>'
            f'<w:bottom w:val="single" w:sz="6" w:space="0" w:color="{NAVY_HEX}"/>'
            f'<w:left w:val="none"/>'
            f'<w:right w:val="none"/>'
            f'<w:insideH w:val="single" w:sz="4" w:space="0" w:color="{BORDER_HEX}"/>'
            f'<w:insideV w:val="none"/>'
            f'</w:tblBorders>'
        )
        tblPr[0].append(borders)

def parse_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    frontmatter = {}
    body = content
    fm_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if fm_match:
        raw_fm = fm_match.group(1)
        body = content[fm_match.end():]
        for line in raw_fm.split('\n'):
            if ':' in line:
                k, v = line.split(':', 1)
                k = k.strip()
                v = v.strip().strip('"\'')
                if v.startswith('[') and v.endswith(']'):
                    items = [item.strip().strip('"\'') for item in v[1:-1].split(',') if item.strip()]
                    frontmatter[k] = items
                else:
                    frontmatter[k] = v

    return frontmatter, body

def add_styled_paragraph(doc, text="", style='Normal', space_before=0, space_after=6, line_spacing=1.2):
    p = doc.add_paragraph(text, style=style)
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = line_spacing
    return p

def process_inline_element(p, element, default_color=COLOR_DARK, default_size=11):
    if isinstance(element, NavigableString):
        text = str(element)
        if text:
            run = p.add_run(text)
            run.font.name = 'Calibri'
            run.font.size = Pt(default_size)
            run.font.color.rgb = default_color
    elif isinstance(element, Tag):
        is_bold = element.name in ['strong', 'b']
        is_italic = element.name in ['em', 'i']
        is_code = element.name == 'code'
        is_link = element.name == 'a'

        for child in element.children:
            if isinstance(child, NavigableString):
                text = str(child)
                run = p.add_run(text)
                run.font.name = 'Consolas' if is_code else 'Calibri'
                run.font.size = Pt(default_size - 1 if is_code else default_size)
                run.font.bold = is_bold
                run.font.italic = is_italic
                if is_link:
                    run.font.color.rgb = COLOR_AMBER
                    run.font.underline = True
                elif is_code:
                    run.font.color.rgb = COLOR_SLATE
                else:
                    run.font.color.rgb = default_color
            elif isinstance(child, Tag):
                process_inline_element(p, child, default_color, default_size)

def build_word_document(frontmatter, body_md, lang="vi"):
    doc = Document()

    # Configure Margins (0.8 inch / ~2cm)
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)
        
        # Header
        header = section.header
        hp = header.paragraphs[0]
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hrun = hp.add_run(
            "THE RICE TOUR — BỘ SƯU TẬP DI SẢN BẾN THÀNH 2026" if lang == "vi" 
            else "THE RICE TOUR — BEN THANH HERITAGE COLLECTION 2026"
        )
        hrun.font.name = "Calibri"
        hrun.font.size = Pt(8.5)
        hrun.font.color.rgb = COLOR_SLATE

        # Footer
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        frun = fp.add_run("thericetour.com  |  info@thericetour.com")
        frun.font.name = "Calibri"
        frun.font.size = Pt(8.5)
        frun.font.color.rgb = COLOR_SLATE

    # Brand Title Header Box
    brand_p = doc.add_paragraph()
    brand_p.paragraph_format.space_before = Pt(0)
    brand_p.paragraph_format.space_after = Pt(2)
    b_run = brand_p.add_run("THE RICE TOUR EDITORIAL PIPELINE")
    b_run.font.name = 'Calibri'
    b_run.font.size = Pt(9)
    b_run.font.bold = True
    b_run.font.color.rgb = COLOR_AMBER

    # Document Title
    title = frontmatter.get('title', 'Tài Liệu Di Sản')
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(4)
    title_p.paragraph_format.space_after = Pt(8)
    t_run = title_p.add_run(title)
    t_run.font.name = 'Calibri'
    t_run.font.size = Pt(20)
    t_run.font.bold = True
    t_run.font.color.rgb = COLOR_NAVY

    # Subtitle / Lead if present
    if frontmatter.get('subtitle'):
        sub_p = doc.add_paragraph()
        sub_p.paragraph_format.space_before = Pt(0)
        sub_p.paragraph_format.space_after = Pt(10)
        s_run = sub_p.add_run(frontmatter['subtitle'])
        s_run.font.name = 'Calibri'
        s_run.font.size = Pt(12)
        s_run.font.italic = True
        s_run.font.color.rgb = COLOR_SLATE

    # Metadata Info Box (Table)
    meta_table = doc.add_table(rows=2, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False
    
    col_widths = [Inches(3.4), Inches(3.4)]
    for row in meta_table.rows:
        for i, cell in enumerate(row.cells):
            cell.width = col_widths[i]
            set_cell_background(cell, LIGHT_BG_HEX)
            set_cell_margins(cell, top=80, bottom=80, left=140, right=140)

    # Fill metadata cells
    cell_00 = meta_table.cell(0, 0).paragraphs[0]
    cell_00.paragraph_format.space_after = Pt(2)
    r1 = cell_00.add_run("📌 Chuyên mục / Category: " if lang == "vi" else "📌 Category: ")
    r1.font.bold = True
    r1.font.size = Pt(9.5)
    cats = frontmatter.get('categories', [])
    r1_val = cell_00.add_run(", ".join(cats) if isinstance(cats, list) else str(cats))
    r1_val.font.size = Pt(9.5)

    cell_01 = meta_table.cell(0, 1).paragraphs[0]
    cell_01.paragraph_format.space_after = Pt(2)
    r2 = cell_01.add_run("📅 Ngày cập nhật: " if lang == "vi" else "📅 Published Date: ")
    r2.font.bold = True
    r2.font.size = Pt(9.5)
    r2_val = cell_01.add_run(str(frontmatter.get('published_date', '2026-09-07')))
    r2_val.font.size = Pt(9.5)

    cell_10 = meta_table.cell(1, 0).paragraphs[0]
    cell_10.paragraph_format.space_after = Pt(2)
    r3 = cell_10.add_run("✍️ Tác giả: " if lang == "vi" else "✍️ Author: ")
    r3.font.bold = True
    r3.font.size = Pt(9.5)
    r3_val = cell_10.add_run(str(frontmatter.get('author', 'The Rice Tour Editorial')))
    r3_val.font.size = Pt(9.5)

    cell_11 = meta_table.cell(1, 1).paragraphs[0]
    cell_11.paragraph_format.space_after = Pt(2)
    r4 = cell_11.add_run("🔗 Canonical Slug: ")
    r4.font.bold = True
    r4.font.size = Pt(9.5)
    r4_val = cell_11.add_run(str(frontmatter.get('slug', '')))
    r4_val.font.size = Pt(9.5)

    set_table_borders(meta_table)

    # Spacing after meta box
    sp = doc.add_paragraph()
    sp.paragraph_format.space_before = Pt(4)
    sp.paragraph_format.space_after = Pt(8)

    # Convert Markdown Body to HTML then walk the AST
    # Clean H1 from body if duplicate of title
    body_clean = re.sub(r'^#\s+.*$', '', body_md, flags=re.MULTILINE).strip()
    html = markdown.markdown(body_clean, extensions=['tables', 'fenced_code'])
    soup = BeautifulSoup(html, 'html.parser')

    for element in soup.children:
        if isinstance(element, NavigableString):
            continue
        
        tag = element.name

        # Headings
        if tag == 'h2':
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(14)
            p.paragraph_format.space_after = Pt(4)
            p.paragraph_format.keep_with_next = True
            run = p.add_run(element.get_text().strip())
            run.font.name = 'Calibri'
            run.font.size = Pt(14)
            run.font.bold = True
            run.font.color.rgb = COLOR_NAVY
            
        elif tag == 'h3':
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(10)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.keep_with_next = True
            run = p.add_run(element.get_text().strip())
            run.font.name = 'Calibri'
            run.font.size = Pt(12)
            run.font.bold = True
            run.font.color.rgb = COLOR_DARK

        elif tag == 'h4':
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(8)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.keep_with_next = True
            run = p.add_run(element.get_text().strip())
            run.font.name = 'Calibri'
            run.font.size = Pt(11)
            run.font.bold = True
            run.font.color.rgb = COLOR_AMBER

        # Paragraph
        elif tag == 'p':
            text = element.get_text().strip()
            if not text:
                continue
            
            # Check if this paragraph is an image placeholder
            img = element.find('img')
            if img:
                img_alt = img.get('alt', 'Hình ảnh')
                img_src = img.get('src', '')
                p = doc.add_paragraph()
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(6)
                p.paragraph_format.space_after = Pt(2)
                irun = p.add_run(f"📷 [Hình ảnh / Image: {img_alt}]")
                irun.font.name = 'Calibri'
                irun.font.size = Pt(9.5)
                irun.font.italic = True
                irun.font.color.rgb = COLOR_SLATE
                continue

            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.line_spacing = 1.2
            for child in element.children:
                process_inline_element(p, child, default_color=COLOR_DARK, default_size=11)

        # Blockquote / Highlight box
        elif tag == 'blockquote':
            bq_text = element.get_text().strip()
            if not bq_text:
                continue
            
            table = doc.add_table(rows=1, cols=1)
            table.alignment = WD_TABLE_ALIGNMENT.CENTER
            table.autofit = False
            cell = table.cell(0, 0)
            cell.width = Inches(6.8)
            set_cell_background(cell, "F1F5F9")
            set_cell_margins(cell, top=100, bottom=100, left=160, right=160)
            
            tcPr = cell._element.get_or_add_tcPr()
            left_border = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:left w:val="single" w:sz="24" w:space="0" w:color="{NAVY_HEX}"/><w:top w:val="none"/><w:right w:val="none"/><w:bottom w:val="none"/></w:tcBorders>')
            tcPr.append(left_border)
            
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.2
            
            for child in element.children:
                if isinstance(child, Tag) and child.name == 'p':
                    for subchild in child.children:
                        process_inline_element(p, subchild, default_color=COLOR_DARK, default_size=10.5)
                else:
                    process_inline_element(p, child, default_color=COLOR_DARK, default_size=10.5)
            
            # small space after callout
            post_p = doc.add_paragraph()
            post_p.paragraph_format.space_before = Pt(0)
            post_p.paragraph_format.space_after = Pt(4)

        # Lists (Unordered & Ordered)
        elif tag in ['ul', 'ol']:
            is_ordered = (tag == 'ol')
            for idx, li in enumerate(element.find_all('li', recursive=False)):
                p = doc.add_paragraph(style='List Bullet' if not is_ordered else 'List Number')
                p.paragraph_format.space_before = Pt(0)
                p.paragraph_format.space_after = Pt(3)
                p.paragraph_format.line_spacing = 1.15
                for child in li.children:
                    process_inline_element(p, child, default_color=COLOR_DARK, default_size=11)

        # Tables
        elif tag == 'table':
            rows = element.find_all('tr')
            if not rows:
                continue
            
            # calculate columns count
            first_row_cells = rows[0].find_all(['th', 'td'])
            col_count = len(first_row_cells)
            if col_count == 0:
                continue

            doc_table = doc.add_table(rows=len(rows), cols=col_count)
            doc_table.alignment = WD_TABLE_ALIGNMENT.CENTER
            doc_table.autofit = False

            # Set equal column widths
            total_width = Inches(6.8)
            col_w = total_width / col_count

            for r_idx, row in enumerate(rows):
                is_header = (r_idx == 0 or row.find('th') is not None)
                cells = row.find_all(['th', 'td'])
                
                for c_idx in range(col_count):
                    if c_idx < len(cells):
                        cell_tag = cells[c_idx]
                        doc_cell = doc_table.cell(r_idx, c_idx)
                        doc_cell.width = col_w
                        set_cell_margins(doc_cell, top=80, bottom=80, left=100, right=100)

                        if is_header:
                            set_cell_background(doc_cell, NAVY_HEX)
                        elif r_idx % 2 == 1:
                            set_cell_background(doc_cell, "F8FAFC")
                        else:
                            set_cell_background(doc_cell, "FFFFFF")

                        p = doc_cell.paragraphs[0]
                        p.paragraph_format.space_before = Pt(0)
                        p.paragraph_format.space_after = Pt(0)
                        p.paragraph_format.line_spacing = 1.1

                        if is_header:
                            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                            run = p.add_run(cell_tag.get_text().strip())
                            run.font.name = 'Calibri'
                            run.font.size = Pt(10)
                            run.font.bold = True
                            run.font.color.rgb = RGBColor(255, 255, 255)
                        else:
                            for child in cell_tag.children:
                                process_inline_element(p, child, default_color=COLOR_DARK, default_size=9.5)

            set_table_borders(doc_table)

            # Space after table
            post_t = doc.add_paragraph()
            post_t.paragraph_format.space_before = Pt(0)
            post_t.paragraph_format.space_after = Pt(6)

        # Horizontal Divider
        elif tag == 'hr':
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(6)
            p.paragraph_format.space_after = Pt(6)
            p_border = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="6" w:space="1" w:color="{BORDER_HEX}"/></w:pBdr>')
            p._element.get_or_add_pPr().append(p_border)

    return doc

def main():
    base_dir = "/Users/huynhtronghieu/Documents/thericetour"
    vi_input_dir = os.path.join(base_dir, "content-pipeline/02-vietnamese-guu")
    en_input_dir = os.path.join(base_dir, "content-pipeline/04-english")
    
    out_base = os.path.join(base_dir, "content-pipeline/06-word-documents")
    out_vi = os.path.join(out_base, "vietnamese")
    out_en = os.path.join(out_base, "english")
    out_full = os.path.join(out_base, "master-dossiers")

    os.makedirs(out_vi, exist_ok=True)
    os.makedirs(out_en, exist_ok=True)
    os.makedirs(out_full, exist_ok=True)

    # 1. Convert all 12 Vietnamese Articles
    vi_files = sorted([f for f in os.listdir(vi_input_dir) if f.endswith('.md')])
    print(f"=== BẮT ĐẦU XUẤT BẢN {len(vi_files)} BÀI VIẾT TIẾNG VIỆT SANG WORD (.docx) ===")
    
    master_vi_doc = Document()
    # Configure Master Doc Margins
    for section in master_vi_doc.sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)

    # Master Cover Title
    cov_p = master_vi_doc.add_paragraph()
    cov_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    cov_p.paragraph_format.space_before = Pt(120)
    cov_p.paragraph_format.space_after = Pt(12)
    c_run = cov_p.add_run("THE RICE TOUR\nBỘ SƯU TẬP 12 CẨM NANG DI SẢN\nQUANH CHỢ BẾN THÀNH 2026")
    c_run.font.name = "Calibri"
    c_run.font.size = Pt(24)
    c_run.font.bold = True
    c_run.font.color.rgb = COLOR_NAVY

    cov_sub = master_vi_doc.add_paragraph()
    cov_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    cov_sub.paragraph_format.space_after = Pt(30)
    cs_run = cov_sub.add_run("Tuyển tập cẩm nang du lịch chuẩn phong cách 'Du lịch có GUU'\nBán kính 1.5km: Di sản, Ẩm thực, Metro ngầm 2026 & Trải nghiệm thực địa")
    cs_run.font.name = "Calibri"
    cs_run.font.size = Pt(12)
    cs_run.font.italic = True
    cs_run.font.color.rgb = COLOR_SLATE

    master_vi_doc.add_page_break()

    for idx, f in enumerate(vi_files):
        in_path = os.path.join(vi_input_dir, f)
        fm, body = parse_markdown_file(in_path)
        doc = build_word_document(fm, body, lang="vi")
        
        out_filename = f.replace('.md', '.docx')
        out_filepath = os.path.join(out_vi, out_filename)
        doc.save(out_filepath)
        print(f"  [VI {idx+1}/{len(vi_files)}] Đã xuất: {out_filename}")

    # Generate Consolidated Master VI Document (12 Ben Thanh Articles)
    ben_thanh_vi_files = [
        "001_dia-diem-noi-tieng-quanh-ben-thanh.md",
        "002_bao-tang-my-thuat-tphcm.md",
        "003_am-thuc-cho-ben-thanh.md",
        "004_lich-trinh-di-bo-ben-thanh-1-ngay.md",
        "005_dinh-doc-lap-sai-gon.md",
        "006_ga-ngam-metro-ben-thanh.md",
        "007_den-hindu-mariamman-sai-gon.md",
        "008_kinh-nghiem-mua-sam-cho-ben-thanh.md",
        "009_xe-bus-2-tang-hop-on-hop-off-sai-gon.md",
        "010_ca-phe-chung-cu-gan-ben-thanh.md",
        "011_rooftop-bar-view-cho-ben-thanh.md",
        "012_khach-san-boutique-gan-ben-thanh.md"
    ]
    
    print("\n=== ĐANG TẠO HỒ SƠ TỔNG HỢP MASTER 12 BÀI TIẾNG VIỆT ===")
    master_vi = Document()
    for s in master_vi.sections:
        s.top_margin = Inches(0.8)
        s.bottom_margin = Inches(0.8)
        s.left_margin = Inches(0.8)
        s.right_margin = Inches(0.8)
        s.header.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT
        s.header.paragraphs[0].add_run("THE RICE TOUR — BỘ SƯU TẬP 12 BÀI VIẾT BẾN THÀNH 2026").font.size = Pt(8.5)
        s.footer.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        s.footer.paragraphs[0].add_run("thericetour.com | Cẩm Nang Du Lịch Có GUU").font.size = Pt(8.5)

    cp = master_vi.add_paragraph()
    cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    cp.paragraph_format.space_before = Pt(140)
    cp.paragraph_format.space_after = Pt(16)
    c1 = cp.add_run("THE RICE TOUR\nBỘ SƯU TẬP TOÀN TẬP 12 CẨM NANG DI SẢN\nQUANH CHỢ BẾN THÀNH (2026)")
    c1.font.name = "Calibri"
    c1.font.size = Pt(24)
    c1.font.bold = True
    c1.font.color.rgb = COLOR_NAVY

    cp2 = master_vi.add_paragraph()
    cp2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    cp2.paragraph_format.space_after = Pt(40)
    c2 = cp2.add_run("Topic Cluster Master Dossier — 12 Chuyên Đề Khám Phá Trái Tim Sài Gòn Quận 1\nDi Sản, Ẩm Thực, Metro Số 1, Đi Bộ, Cà Phê Chung Cư, Sky Bar & Khách Sạn Boutique")
    c2.font.name = "Calibri"
    c2.font.size = Pt(12)
    c2.font.italic = True
    c2.font.color.rgb = COLOR_SLATE

    master_vi.add_page_break()

    for idx, f in enumerate(ben_thanh_vi_files):
        in_path = os.path.join(vi_input_dir, f)
        if os.path.exists(in_path):
            fm, body = parse_markdown_file(in_path)
            # Add article header
            art_doc = build_word_document(fm, body, lang="vi")
            for elem in art_doc.paragraphs:
                p = master_vi.add_paragraph(elem.text, style=elem.style.name if elem.style else 'Normal')
                p.paragraph_format.space_before = elem.paragraph_format.space_before
                p.paragraph_format.space_after = elem.paragraph_format.space_after
                p.paragraph_format.line_spacing = elem.paragraph_format.line_spacing
                p.alignment = elem.alignment
                for r in elem.runs:
                    nr = p.add_run(r.text)
                    nr.font.name = r.font.name
                    nr.font.size = r.font.size
                    nr.font.bold = r.font.bold
                    nr.font.italic = r.font.italic
                    if r.font.color and r.font.color.rgb:
                        nr.font.color.rgb = r.font.color.rgb
            if idx < len(ben_thanh_vi_files) - 1:
                master_vi.add_page_break()

    master_vi_path = os.path.join(out_base, "000_TONG_HOP_12_BAI_VIET_BEN_THANH_VI.docx")
    master_vi.save(master_vi_path)
    print(f"  -> Đã lưu Master Dossier Tiếng Việt: {master_vi_path}")

    # 2. Convert all 12 English Articles
    ben_thanh_en_files = [
        "001_things-to-do-near-ben-thanh-market.md",
        "002_hcmc-museum-of-fine-arts-guide.md",
        "003_ben-thanh-market-food-guide.md",
        "004_ben-thanh-one-day-walking-tour.md",
        "005_independence-palace-saigon-guide.md",
        "006_ben-thanh-central-metro-station-guide.md",
        "007_mariamman-hindu-temple-saigon.md",
        "008_ben-thanh-market-shopping-guide.md",
        "009_saigon-hop-on-hop-off-bus-guide.md",
        "010_secret-apartment-cafes-near-ben-thanh.md",
        "011_best-rooftop-bars-near-ben-thanh.md",
        "012_boutique-hotels-near-ben-thanh.md"
    ]
    print(f"\n=== BẮT ĐẦU XUẤT BẢN {len(ben_thanh_en_files)} BÀI VIẾT TIẾNG ANH (NATGEO) SANG WORD (.docx) ===")
    
    for idx, f in enumerate(ben_thanh_en_files):
        in_path = os.path.join(en_input_dir, f)
        if not os.path.exists(in_path):
            print(f"  [EN WARNING] File không tồn tại: {f}")
            continue
        fm, body = parse_markdown_file(in_path)
        doc = build_word_document(fm, body, lang="en")
        
        out_filename = f.replace('.md', '.docx')
        out_filepath = os.path.join(out_en, out_filename)
        doc.save(out_filepath)
        print(f"  [EN {idx+1}/{len(ben_thanh_en_files)}] Successfully exported: {out_filename}")

    # Generate Consolidated Master EN Document
    print("\n=== GENERATING MASTER CONSOLIDATED ENGLISH DOSSIER ===")
    master_en = Document()
    for s in master_en.sections:
        s.top_margin = Inches(0.8)
        s.bottom_margin = Inches(0.8)
        s.left_margin = Inches(0.8)
        s.right_margin = Inches(0.8)
        s.header.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT
        s.header.paragraphs[0].add_run("THE RICE TOUR — BEN THANH HERITAGE COMPENDIUM 2026").font.size = Pt(8.5)
        s.footer.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        s.footer.paragraphs[0].add_run("thericetour.com | Bespoke Inbound Journeys").font.size = Pt(8.5)

    ep = master_en.add_paragraph()
    ep.alignment = WD_ALIGN_PARAGRAPH.CENTER
    ep.paragraph_format.space_before = Pt(140)
    ep.paragraph_format.space_after = Pt(16)
    e1 = ep.add_run("THE RICE TOUR\nTHE DEFINITIVE BEN THANH TRAVEL COMPENDIUM\n12 HERITAGE & LIFESTYLE GUIDES (2026)")
    e1.font.name = "Calibri"
    e1.font.size = Pt(24)
    e1.font.bold = True
    e1.font.color.rgb = COLOR_NAVY

    ep2 = master_en.add_paragraph()
    ep2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    ep2.paragraph_format.space_after = Pt(40)
    e2 = ep2.add_run("A Curated Inbound Compendium of District 1’s Epicenter: Colonial Relics, Culinary Alleyways,\nMetro Line 1 Logistics, Secret Apartment Cafes, Twilight Skybars & Boutique Stays")
    e2.font.name = "Calibri"
    e2.font.size = Pt(12)
    e2.font.italic = True
    e2.font.color.rgb = COLOR_SLATE

    master_en.add_page_break()

    for idx, f in enumerate(ben_thanh_en_files):
        in_path = os.path.join(en_input_dir, f)
        if os.path.exists(in_path):
            fm, body = parse_markdown_file(in_path)
            art_doc = build_word_document(fm, body, lang="en")
            for elem in art_doc.paragraphs:
                p = master_en.add_paragraph(elem.text, style=elem.style.name if elem.style else 'Normal')
                p.paragraph_format.space_before = elem.paragraph_format.space_before
                p.paragraph_format.space_after = elem.paragraph_format.space_after
                p.paragraph_format.line_spacing = elem.paragraph_format.line_spacing
                p.alignment = elem.alignment
                for r in elem.runs:
                    nr = p.add_run(r.text)
                    nr.font.name = r.font.name
                    nr.font.size = r.font.size
                    nr.font.bold = r.font.bold
                    nr.font.italic = r.font.italic
                    if r.font.color and r.font.color.rgb:
                        nr.font.color.rgb = r.font.color.rgb
            if idx < len(ben_thanh_en_files) - 1:
                master_en.add_page_break()

    master_en_path = os.path.join(out_base, "000_FULL_COLLECTION_12_ARTICLES_BEN_THANH_EN.docx")
    master_en.save(master_en_path)
    print(f"  -> Successfully saved Master English Compendium: {master_en_path}")

    print("\n=== HOÀN TẤT XUẤT BẢN TOÀN BỘ FILE WORD (.docx) ===")
    print(f"📁 Thư mục Tiếng Việt: {out_vi}")
    print(f"📁 Thư mục Tiếng Anh:  {out_en}")
    print(f"📁 Hồ sơ Master Dossier: {out_base}")

if __name__ == "__main__":
    main()
