"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function chu_ban_shu_ji() {
  const docs = [
    { uri: "/docs/chu-ban-shu-ji/1.pdf" },
    { uri: "/docs/chu-ban-shu-ji/2.pdf" },
    { uri: "/docs/chu-ban-shu-ji/3.pdf" },
    { uri: "/docs/chu-ban-shu-ji/4.pdf" },
    { uri: "/docs/chu-ban-shu-ji/5.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] lg:max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>陳子石</Tab>
          <Tab>老子觀出版</Tab>
          <Tab>唐門著作</Tab>
          <Tab>其他珍本</Tab>
          <Tab>著作售價</Tab>
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
          <div className="h-[calc(100dvh-13rem)] max-[439px]:h-[calc(100dvh-15rem)]">
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
        <TabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
}