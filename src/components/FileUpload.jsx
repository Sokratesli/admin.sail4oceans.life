import React, { useState, useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { createWorker } from "tesseract.js";
import pdfjs from 'pdfjs-dist';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
        (async () => {
          const worker = await createWorker({
            logger: m => console.log(m)
          });
    
          if (file.type === 'application/pdf') {
            // Handle PDF files
            const pdfBuffer = await file.arrayBuffer();
            console.log(file)
            const pdfDoc = await pdfjs.getDocument({ data: pdfBuffer }).promise;
            let pdfText = '';
    
            for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
              const page = await pdfDoc.getPage(pageNum);
              pdfText += await page.getText();
            }
    
            console.log(pdfText);
            setText(pdfText);
          } else {
            // Handle image files
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const fileBuffer = await file.arrayBuffer();
            const { data: { text } } = await worker.recognize(fileBuffer);
            console.log(text);
            setText(text);
            await worker.terminate();
          }
        })();
      }
    };

  return (
    <form>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Upload a new File
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                File Upload
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PDF or JPG up to 20MB
                  </p>
                </div>
              </div>
              {selectedFile && text && (
                <div>
                  <h2>OCR Text:</h2>
                  <pre>{text}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
