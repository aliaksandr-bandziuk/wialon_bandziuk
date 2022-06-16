// import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import { useState } from 'react';

import './MuiTabs.scss';

import { ImagerDisplay, imagerShow, ImagerImg } from '../imager/index.js'

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
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg1} alt="Tab 1">
          </ImagerImg>
        </TabPanel>
        <TabPanel value='2'>
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg2} alt="Tab 2">
          </ImagerImg>
          {/* <img src={tabImg2} alt="Tab 2" /> */}
        </TabPanel>
        <TabPanel value='3'>
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg3} alt="Tab 3">
          </ImagerImg>
          {/* <img src={tabImg3} alt="Tab 3" /> */}
        </TabPanel>
        <TabPanel value='4'>
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg4} alt="Tab 4">
          </ImagerImg>
          {/* <img src={tabImg4} alt="Tab 4" /> */}
        </TabPanel>
        <TabPanel value='5'>
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg5} alt="Tab 5">
          </ImagerImg>
          {/* <img src={tabImg5} alt="Tab 5" /> */}
        </TabPanel>
        <TabPanel value='6'>
          <ImagerDisplay z-index="2000" />
            <ImagerImg src={tabImg6} alt="Tab 6">
          </ImagerImg>
          {/* <img src={tabImg6} alt="Tab 6" /> */}
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default MuiTabs;