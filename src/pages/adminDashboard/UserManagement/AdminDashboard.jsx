import React from 'react';
import './style/AdminDashboard.css';
import { Card, CardContent, Typography,  Button } from '@mui/material';
import { FaUsers } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';

function AdminDashboard() {
  

  const cards = [
    { title: 'Free Users', value: '3162', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Silver Users', value: '0', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Premium Users', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Total Paid Users', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Assistance Pending', value: '3725', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Assistance Success', value: '2', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Paid User Receipts', value: '1133432.86', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Assistance Receipts', value: '153373.88', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Renewal Receipts', value: '6646.0', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Total Online Receipts', value: '1296051.8', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Total Online Receipts', value: '1296051.8', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    { title: 'Total Online Receipts', value: '1296051.8', icon: <MdCurrencyRupee style={{ fontSize: '50px', color: '#ED7014' }} /> },
    
  ];

  return (
    <div className="admin-dashboard-container">
      
      {/* Cards Section */}
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <Card key={index} className="dashboard-card">
            <CardContent>
              <div className="card-content">
                <div className="card-left">
                  <Typography variant="h5">{card.value}</Typography>
                  <Typography variant="body2">{card.title}</Typography>
                </div>
                <div className="card-icon">{card.icon}</div>
              </div>
              <div className="view-all-button-container">
        <Button variant="contained" color="primary" onClick={() => alert('View All clicked!')}>
          View All
        </Button>
      </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
