import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const App = () => {
  const [tableHead, setTableHead] = useState(['Name', 'Parent Name', 'Contact Name', 'Description']);
  const [widthArr, setWidthArr] = useState([200, 200, 200, 200]);
  const [tableData, setTableData] = useState([
    {
      "parentName": "csp",
      "name": "Acme Corp",
      "description": "Sample Organization Provisioned via: MetroAE Config",
      "contactName": "Supriya ms"
    },
    {
      "parentName": "csp",
      "name": "CATS_SDWAN_ORG_LARGE1",
      "description": "Organization imported via automation",
      "contactName": "Performance Org"
    },
    {
      "parentName": "csp",
      "name": "CATS_SDWAN_ORG_MEDIUM1",
      "description": "Organization imported via automation",
      "contactName": "Performance Org"
    },
    {
      "parentName": "csp",
      "name": "CATS_SDWAN_ORG_SMALL1",
      "description": "Organization imported via automation",
      "contactName": "Performance Org"
    },
    {
      "parentName": "csp",
      "name": "MetroAE_Org",
      "description": "Dave_Regression",
      "contactName": "Supriya ms"
    },
    {
      "parentName": "csp",
      "name": "RF-Apps_SubscriberUser_Tests_AppGrp-portal-rf-proxy-qa-master",
      "description": "Subscriber Org created by RF Test",
      "contactName": "Automation Org"
    },
    {
      "parentName": "csp",
      "name": "RF-Dashboard_Tests-DND-MetroAE-Simulated1",
      "description": "Enterprise RF-Dashboard_Tests-DND-MetroAE-Simulated1",
      "contactName": "Supriya ms"
    },
    {
      "parentName": "csp",
      "name": "RF-Redundancy_Groups-SubUser-portal-rf-proxy-qa-master",
      "description": "Subscriber Org created by RF Test",
      "contactName": "Automation Org"
    },
    {
      "parentName": "csp",
      "name": "RF_ANE_SUB-portal-rf-proxy-qa-master",
      "description": "Subscriber Org created by RF Test",
      "contactName": "Automation Org"
    },
    {
      "parentName": "csp",
      "name": "RF_SubscriberUser-portal-rf-proxy-qa-master",
      "description": "RobotFramework",
      "contactName": "Automation Org"
    },
    {
      "parentName": "csp",
      "name": "RF_Sub_Policies-portal-rf-proxy-qa-master",
      "description": "Subscriber Org created by RF Test",
      "contactName": "Automation Org"
    },
    {
      "parentName": "csp",
      "name": "Stark Industries",
      "description": "Sample Organization Provisioned via: MetroAE Config",
      "contactName": "Atul Pandey"
    }
  ].map(item => [
    item.name,
    item.parentName,
    item.contactName,
    item.description
  ]));

  return (
    <ScrollView horizontal={true}>
      <View style={{ padding: 16, paddingTop: 30 }}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={tableHead} widthArr={widthArr} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6, color: 'black' }} />
          <Rows data={tableData} widthArr={widthArr} textStyle={{ margin: 6, color: 'black' }} />
        </Table>
      </View>
    </ScrollView>
  );
};

export default App;
