"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function shih_cih_tu_hua() {
  const docs = [
    { uri: "/docs/shih-cih-tu-hua/1.pdf" },
    { uri: "/docs/shih-cih-tu-hua/2.pdf" },
    { uri: "/docs/shih-cih-tu-hua/3.pdf" },
    { uri: "/docs/shih-cih-tu-hua/4.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] lg:max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>道情詩</Tab>
          <Tab>道情詩</Tab>
          <Tab>道情詩(二)</Tab>
          <Tab>和答「嚼道吟」續十二首元韻</Tab>
        </TabList>
        <TabPanel>
          <div className="h-[calc(100dvh-13rem)] max-[514px]:h-[calc(100dvh-15rem)]">
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
          <div className="h-[calc(100dvh-13rem)] max-[514px]:h-[calc(100dvh-15rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[1]}
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
          <div className="h-[calc(100dvh-13rem)] max-[514px]:h-[calc(100dvh-15rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[2]}
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
          <div className="h-[calc(100dvh-13rem)] max-[514px]:h-[calc(100dvh-15rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[3]}
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
      </Tabs>
    </div>
  );
}