"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function chen_zih_shih_zon_shih() {
  const docs = [
    { uri: "/docs/chen-zih-shih-zon-shih/1.pdf" },
    { uri: "/docs/chen-zih-shih-zon-shih/2.pdf" },
    { uri: "/docs/chen-zih-shih-zon-shih/3.pdf" },
    { uri: "/docs/chen-zih-shih-zon-shih/4.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>陳子石傳略</Tab>
          <Tab>陳子石小傳</Tab>
          <Tab>憶道吟小傳</Tab>
          <Tab>著作年表</Tab>
        </TabList>
        <TabPanel>
          <div className="h-[calc(100dvh-13rem)] max-[439px]:h-[calc(100dvh-15rem)]">
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
          <div className="h-[calc(100dvh-13rem)] max-[439px]:h-[calc(100dvh-15rem)] overflow-scroll">
            <img src="/docs/chen-zih-shih-zon-shih/2-1.jpg" alt="picture 2-1" />
            <br />
            <img src="/docs/chen-zih-shih-zon-shih/2-2.jpg" alt="picture 2-2" />
            <br />
            <img src="/docs/chen-zih-shih-zon-shih/2-3.jpg" alt="picture 2-3" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-13rem)] max-[439px]:h-[calc(100dvh-15rem)]">
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
          <div className="h-[calc(100dvh-13rem)] max-[439px]:h-[calc(100dvh-15rem)]">
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