"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function tong_men_shih_suei() {
  const docs = [
    { uri: "/docs/tong-men-shih-suei/1.pdf" },
    { uri: "/docs/tong-men-shih-suei/2.pdf" },
    { uri: "/docs/tong-men-shih-suei/3.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] lg:max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>台灣</Tab>
          <Tab>香港</Tab>
          <Tab>東南亞</Tab>
        </TabList>
        <TabPanel>
          <div className="h-[calc(100dvh-13rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[0]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
}