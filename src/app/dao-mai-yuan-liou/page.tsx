"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function dao_mai_yuan_liou() {
  const docs = [
    { uri: "/docs/dao-mai-yuan-liou/1.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/2.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/3.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/4.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/5.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/6.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/7.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/8.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/9.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/10.pdf" },
    { uri: "/docs/dao-mai-yuan-liou/11.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>南宗真傳</Tab>
          <Tab>鑪峰學院</Tab>
          <Tab>桃源仙境</Tab>
          <Tab>老子觀</Tab>
          <Tab>十大願望</Tab>
          <Tab>鑪峰謁語</Tab>
          <Tab>生命學脩養術</Tab>
          <Tab>學道十知</Tab>
          <Tab>學道五要</Tab>
          <Tab>生命學研究(一)</Tab>
          <Tab>生命學研究(二)</Tab>
        </TabList>
        <TabPanel>
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
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
        </TabPanel >
        <TabPanel>
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[1]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[2]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[3]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[4]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[5]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[6]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[7]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[8]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[9]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
          <div className="h-[calc(100dvh-15rem)] max-[598px]:h-[calc(100dvh-18rem)] max-[423px]:h-[calc(100dvh-20rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[10]}
              pluginRenderers={DocViewerRenderers}
              config={{
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
      </Tabs >
    </div >
  );
}