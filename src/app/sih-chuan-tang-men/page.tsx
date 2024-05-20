"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function tong_men_shih_suei() {
  const docs = [
    { uri: "/docs/sih-chuan-tang-men/1.pdf" },
    { uri: "/docs/sih-chuan-tang-men/2.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>唐道宗與唐門</Tab>
          <Tab>著作介紹</Tab>
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
      </Tabs>
    </div>
  );
}