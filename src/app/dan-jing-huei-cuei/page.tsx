"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function dan_jing_huei_cuei() {
  const docs = [
    { uri: "/docs/dan-jing-huei-cuei/1.pdf" },
    { uri: "/docs/dan-jing-huei-cuei/2.pdf" },
    { uri: "/docs/dan-jing-huei-cuei/3.pdf" },
    { uri: "/docs/dan-jing-huei-cuei/4.pdf" },
    { uri: "/docs/dan-jing-huei-cuei/5.pdf" },
    { uri: "/docs/dan-jing-huei-cuei/6.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>秦漢期</Tab>
          <Tab>晉唐期</Tab>
          <Tab>宋元期</Tab>
          <Tab>明期</Tab>
          <Tab>清期</Tab>
          <Tab>民國期</Tab>
        </TabList>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
}