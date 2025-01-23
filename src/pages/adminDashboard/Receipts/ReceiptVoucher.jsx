import React from 'react';
import './style/ReceiptVoucher.css';
import { Card, CardContent, Typography,  Button } from '@mui/material';
import { FaUsers } from 'react-icons/fa';


function ReceiptVoucher() {
    const cards = [
        { title: 'Free Users', value: '3162', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
        { title: 'Silver Users', value: '0', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
        { title: 'Premium Users', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
        { title: 'Total Users', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
        { title: 'Online Receipts', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
        { title: 'Renewals', value: '1', icon: <FaUsers style={{ fontSize: '50px', color: '#ED7014' }} /> },
      
    ]
    return(
         <div className="receipts-dashboard-container">
            <Typography
                      variant="h5"
                      className="reciept-user-heading"
                      
                    >
                      Receipt Vocher
                    </Typography>
              
              {/* Cards Section */}
              <div className="receipts-dashboard-cards">
                {cards.map((card, index) => (
                  <Card key={index} className="receipts-dashboard-card">
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

export default  ReceiptVoucher;
