import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider, Collapse } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AssistantIcon from '@mui/icons-material/Assistant';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './AdminSideBar.css';

function AdminSideBar() {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);
  const [isPromoterManagementOpen, setIsPromoterManagementOpen] = useState(false);
  const [isReceiptsOpen , setisReceiptsOpen ] = useState(false);
  const [isReportsOpen , setisReportsOpen ] = useState(false);

  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
  };
  const toggleAssistance = () => {
    setIsAssistanceOpen(!isAssistanceOpen);
  };
  const togglePromoterManagement = () => {
    setIsPromoterManagementOpen(!isPromoterManagementOpen);
  };
  const toggleReceipts = () => {
    setisReceiptsOpen (!isReceiptsOpen );
  };
  const toggleReports = () => {
    setisReportsOpen (!isReportsOpen );
  };

  return (
    <Drawer className="admin-sidebar" variant="permanent" anchor="left">
      <List >
        <ListItem button component={Link} to="/admin">
          <AccountCircleIcon fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Profile" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/admin/dashboard">
          <DashboardCustomizeIcon fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* <hr /> */}

        {/*---- UserManagement----------------------------------------------------------- */}
        <ListItem button onClick={toggleUserManagement}>
          <ManageAccountsIcon fontSize="large" className="dashboard-icons" />
          <ListItemText primary="User Management" />
          {isUserManagementOpen ? (
            <KeyboardArrowUpIcon fontSize="large" className="dashboard-icons" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" className="dashboard-icons" />
          )}
        </ListItem>
        <Collapse in={isUserManagementOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/users" className="nested-list-item">
              <ListItemText primary="User" />
            </ListItem>
            <ListItem button component={Link} to="/admin/user-upgrade" className="nested-list-item">
              <ListItemText primary="User Upgrade" />
            </ListItem>
            <ListItem button component={Link} to="/admin/renewals" className="nested-list-item">
              <ListItemText primary="Renewals" />
            </ListItem>
            <ListItem button component={Link} to="/admin/reset-password" className="nested-list-item">
              <ListItemText primary="Reset Password" />
            </ListItem>
            <ListItem button component={Link} to="/admin/image-verification" className="nested-list-item">
              <ListItemText primary="Image Verification" />
            </ListItem>
          </List>
        </Collapse>
        {/* <hr /> */}

        {/*--------- Assistance Service------------------------------------------------------------ */}
        <ListItem button onClick={toggleAssistance}>
          < AssistantIcon fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Assistance Service" />
          {isAssistanceOpen ? (
            <KeyboardArrowUpIcon fontSize="large" className="dashboard-icons" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" className="dashboard-icons" />
          )}
        </ListItem>
        <Collapse in={isAssistanceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/pending" className="nested-list-item">
              <ListItemText primary="Pending" />
            </ListItem>
            <ListItem button component={Link} to="/admin/success" className="nested-list-item">
              <ListItemText primary="Success" />
            </ListItem>
            {/* <ListItem button component={Link} to="/admin/promoter-users" className="nested-list-item">
              <ListItemText primary="Promoter Users" />
            </ListItem> */}
        
          </List>
        </Collapse>
        {/* <hr /> */}

        {/*--------- Promoter Management------------------------------------------------------------ */}
        <ListItem button onClick={togglePromoterManagement}>
          <GroupsIcon  fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Promoter Management" />
          {isPromoterManagementOpen ? (
            <KeyboardArrowUpIcon fontSize="large" className="dashboard-icons" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" className="dashboard-icons" />
          )}
        </ListItem>
        <Collapse in={isPromoterManagementOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/promoters" className="nested-list-item">
              <ListItemText primary="Promoters" />
            </ListItem>
            <ListItem button component={Link} to="/admin/promoters-users" className="nested-list-item">
              <ListItemText primary="Promoters Users" />
            </ListItem>
            <ListItem button component={Link} to="/admin/promoters-earnings" className="nested-list-item">
              <ListItemText primary="Promoters Earning" />
            </ListItem>
            <ListItem button component={Link} to="/admin/pay-to-promoters" className="nested-list-item">
              <ListItemText primary="Pay to Promoters" />
            </ListItem>
            
          </List>
        </Collapse>
        {/* <hr /> */}
        {/*--------- Receipts------------------------------------------------------------ */}
        <ListItem button onClick={toggleReceipts}>
          <ReceiptLongIcon  fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Receipts" />
          {isReceiptsOpen ? (
            <KeyboardArrowUpIcon fontSize="large" className="dashboard-icons" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" className="dashboard-icons" />
          )}
        </ListItem>
        <Collapse in={isReceiptsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/online-transaction" className="nested-list-item">
              <ListItemText primary="Online Transaction" />
            </ListItem>
            {/* <ListItem button component={Link} to="/admin/assistance-online-transaction" className="nested-list-item">
              <ListItemText primary="Assistance Online Transaction" />
            </ListItem> */}
            <ListItem button component={Link} to="/admin/receipt-voucher" className="nested-list-item">
              <ListItemText primary="Receipt Voucher" />
            </ListItem> 
          </List>
        </Collapse>
        {/* <hr /> */}
        
        {/*--------- Report------------------------------------------------------------ */}
        <ListItem button onClick={toggleReports}>
          <MarkEmailUnreadIcon  fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Reports" />
          {isReportsOpen ? (
            <KeyboardArrowUpIcon fontSize="large" className="dashboard-icons" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" className="dashboard-icons" />
          )}
        </ListItem>
        <Collapse in={isReportsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/user-reports" className="nested-list-item">
              <ListItemText primary="User Reports" />
            </ListItem>
            <ListItem button component={Link} to="/admin/renewals-report" className="nested-list-item">
              <ListItemText primary="Renewals" />
            </ListItem>
            <ListItem button component={Link} to="/admin/receipts" className="nested-list-item">
              <ListItemText primary="Receipts" />
            </ListItem> 
          </List>
        </Collapse>
        {/* <hr /> */}
          {/* -----notifications------------------------------- */}
        <ListItem button component={Link} to="/admin/notifications">
          <NotificationsIcon fontSize="large" className="dashboard-icons" />
          <ListItemText primary="Notifications" />
        </ListItem>
        {/* <hr /> */}
        
      </List>
    </Drawer>
  );
}

export default AdminSideBar;
