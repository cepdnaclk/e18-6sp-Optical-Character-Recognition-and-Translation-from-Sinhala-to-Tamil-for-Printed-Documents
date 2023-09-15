---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e18-6sp-Optical-Character-Recognition-and-Translation-from-Sinhala-to-Tamil-for-Printed-Documents
title: Optical Character Recognition and Translation from Sinhala to Tamil for Printed Documents
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Optical Character Recognition and Translation from Sinhala to Tamil for Printed Documents

---

<!-- This is a sample image, to show how to add images to your page. To learn more options, please refer [this](https://projects.ce.pdn.ac.lk/docs/faq/how-to-add-an-image/) -->

<!-- ![Sample Image](./images/sample.png) -->

## Table of Contents
1. [Introduction](#introduction)
2. [Development Plan](#development-plan)
3. [Team](#team)
4. [Links](#links)

---

## Introduction


The problem domain involves a language barrier gap between Sinhala and Tamil, with limited resources available for translating printed documents from Sinhala to Tamil. This presents challenges in accurately translating content due to significant linguistic differences. The scarcity of tools and trained translators in this language pair exacerbates the issue. 

Moreover, the translation process is costly and time-consuming, requiring manual translation and attention to detail. Addressing this problem necessitates bridging the language gap, increasing translation resources, and exploring more efficient workflows.

The solution can be achieved by several steps
- Preprocess the printed document for OCR by ensuring good image quality.
- Enhance the image to improve its quality.
- Extract the text using OCR algorithms.
- Translate the extracted Sinhala text to Tamil using a machine translation system.
- Perform post-processing to clean up the translated text.
- Generate the translated text in the desired output format.

### Our approach
![image](https://github.com/vithurshiniS/e18-6sp-Optical-Character-Recognition-and-Translation-from-Sinhala-to-Tamil-for-Printed-Documents/assets/95094083/9c4da332-eb27-461e-b253-7f638f9fc321)

### What have we used
- Tesserect OCR to convert printed document into written text
- Google Translation API to convert Sinhala to Tamil
- ReactJS for frontend development
- NodeJS for backend development
- Visual Studio Code as code editor
- Postman for testing

### Issues we faced and how we overcame
- Faced difficulty in integrating components  together - Followed modular design pattern
- Tesseract OCR Engine doesn't support documents; only images - Convert documents into images and pass into our system
- Errors in OCR extraction due to logos, images, unrecognized characters - Enabled all 3 official languages to be recognized by OCR engine. Need to implement Text identification & Localization module
- OCR extraction takes little amount of time - Improve image preprocessing & Introduce multithreading
- Ensuring the acuracy of OCR extraction and translation modules - Manual checking. Need to come up with an automated reliable checking system

## Development Plan
![image](https://github.com/vithurshiniS/e18-6sp-Optical-Character-Recognition-and-Translation-from-Sinhala-to-Tamil-for-Printed-Documents/assets/95094083/484b8d97-6c68-4662-8c5b-d5a9911de90f)

## Team
-  E/18/245, Nishani K., [email](mailto:e18245@eng.pdn.ac.lk)
-  E/18/340, Subramanieam V., [email](mailto:e18340@eng.pdn.ac.lk)
-  E/18/366, Thulasiyan Y., [email](mailto:e18366@eng.pdn.ac.lk)

## Links

- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
