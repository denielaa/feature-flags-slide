import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from 'theme-ui';
import { useUnleash } from 'react-unleash';

export const ProductList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { isEnabled } = useUnleash('myFeatureToggle');

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs defaultIndex={0} onChange={handleTabClick}>
      <TabList>
        <Tab>Product 1</Tab>
        <Tab>Product 2</Tab>
        <Tab>Feature Flags</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box p={3}>
            <h2>Product 1</h2>
            <p>This is the description for Product 1.</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={3}>
            <h2>Product 2</h2>
            <p>This is the description for Product 2.</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={3}>
            <h2>Feature Flags</h2>
            {isEnabled && <p>This is my new feature!</p>}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
