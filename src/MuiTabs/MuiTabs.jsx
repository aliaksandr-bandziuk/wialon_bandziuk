// import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import { useState } from 'react';

import './MuiTabs.scss';

import tabImg1 from '../images/tab1.jpg';
import tabImg2 from '../images/tab2.jpg';
import tabImg3 from '../images/tab3.jpg';
import tabImg4 from '../images/tab4.jpg';
import tabImg5 from '../images/tab5.jpg';
import tabImg6 from '../images/tab6.jpg';

const MuiTabs = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList aria-label='Tabs' 
            onChange={handleChange}
            // variant="scrollable" 
            // scrollButtons="auto"
            indicatorColor='none'
          >
            <Tab 
              // sx={{
              //   border: '1px solid #DBDBDB',
              //   borderRadius: '8px'
              // }} 
              label='Онлайн-контроль передвижения' 
              value='1' 
            />
            <Tab label='Контроль топлива' value='2' />
            <Tab label='Контроль прохождения маршрутов' value='3' />
            <Tab label='Мониторинг активности сотрудников' value='4' />
            <Tab label='Контроль эксплуатации автопарка' value='5' />
            <Tab label='Анализ параметров датчиков' value='6' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <img src={tabImg1} alt="Tab 1" />
        </TabPanel>
        <TabPanel value='2'>
          <img src={tabImg2} alt="Tab 2" />
        </TabPanel>
        <TabPanel value='3'>
          <img src={tabImg3} alt="Tab 3" />
        </TabPanel>
        <TabPanel value='4'>
          <img src={tabImg4} alt="Tab 4" />
        </TabPanel>
        <TabPanel value='5'>
          <img src={tabImg5} alt="Tab 5" />
        </TabPanel>
        <TabPanel value='6'>
          <img src={tabImg6} alt="Tab 6" />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default MuiTabs;