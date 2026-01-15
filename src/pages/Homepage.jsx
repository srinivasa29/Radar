// // import React, { useState } from 'react';
// // import './HomePage.css';

// // // MOCK DATA (Fake data for presentation stability)
// // const mockStock = {
// //   symbol: "BTC",
// //   price: "42,500.00",
// //   change: "+5.2%",
// //   marketCap: "800B",
// //   volume: "24B",
// //   high: "43,000",
// //   low: "41,200"
// // };

// // const HomePage = () => {
// //   // The Switch State: false = Investor, true = Trader
// //   const [isTraderMode, setIsTraderMode] = useState(false);

// //   return (
// //     <div className={isTraderMode ? "dashboard-container trader-theme" : "dashboard-container investor-theme"}>
      
// //       {/* Header & Toggle Switch */}
// //       <header className="navbar">
// //         <h1>
// //           <img src="/radar-logo.png" alt="Radar" className="logo-img" />
// //           <span className="brand-name">Radar</span>
// //         </h1>
        
// //         <div className="toggle-wrapper">
// //           <span className={!isTraderMode ? "active-label" : ""}>Investor</span>
// //           <label className="switch">
// //             <input 
// //               type="checkbox" 
// //               checked={isTraderMode} 
// //               onChange={() => setIsTraderMode(!isTraderMode)} 
// //             />
// //             <span className="slider round"></span>
// //           </label>
// //           <span className={isTraderMode ? "active-label" : ""}>Trader</span>
// //         </div>

// //         <div className="nav-buttons">
// //           <a href="/login" className="nav-btn login-btn">Login</a>
// //           <a href="/register" className="nav-btn register-btn">Register</a>
// //         </div>
// //       </header>

// //       {/* Main Content Area */}
// //       <main className="content">
// //         {isTraderMode ? (
// //           <TraderView data={mockStock} />
// //         ) : (
// //           <InvestorView data={mockStock} />
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // // SUB-COMPONENT: INVESTOR VIEW (Simple, Clean)
// // const InvestorView = ({ data }) => (
// //   <div className="view-container investor">
// //     <div className="welcome-card">
// //       <h2>Good Morning, Investor! ☀️</h2>
// //       <p>Your portfolio is up by 12% this week.</p>
// //     </div>

// //     <div className="simple-card">
// //       <h3>Bitcoin (BTC)</h3>
// //       <div className="big-price">${data.price}</div>
// //       <div className="trend-green">Likely to grow 🚀</div>
// //       <p className="description">Bitcoin is the leading cryptocurrency. Great for long-term holding.</p>
// //     </div>
    
// //     {/* Visual placeholder for a simple line chart */}
// //     <div className="chart-placeholder">
// //        [Simple Line Chart Image Goes Here]
// //        <br/><small>Steady Growth Curve</small>
// //     </div>
// //   </div>
// // );

// // // SUB-COMPONENT: TRADER VIEW (Complex, Dark)
// // const TraderView = ({ data }) => (
// //   <div className="view-container trader">
// //     <div className="ticker-bar">
// //       <span>BTC: {data.price}</span> | <span>ETH: 2,200</span> | <span>EUR/USD: 1.09</span>
// //     </div>

// //     <div className="trader-grid">
// //       <div className="panel chart-panel">
// //         <h3>BTC/USD Technical Chart (1H)</h3>
// //         {/* Visual placeholder for complex chart */}
// //         <div className="chart-box-dark">
// //             [Candlestick Patterns / RSI / MACD]
// //         </div>
// //       </div>

// //       <div className="panel data-panel">
// //         <h3>Order Book</h3>
// //         <table>
// //           <thead><tr><th>Price</th><th>Size</th></tr></thead>
// //           <tbody>
// //             <tr style={{color: '#ff4d4d'}}><td>42,505</td><td>0.5</td></tr>
// //             <tr style={{color: '#ff4d4d'}}><td>42,502</td><td>1.2</td></tr>
// //             <tr style={{color: '#00cc00'}}><td>42,500</td><td>5.0</td></tr>
// //             <tr style={{color: '#00cc00'}}><td>42,498</td><td>2.3</td></tr>
// //           </tbody>
// //         </table>
        
// //         <div className="stats-box">
// //           <p>24h High: {data.high}</p>
// //           <p>24h Low: {data.low}</p>
// //           <p>Vol: {data.volume}</p>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default HomePage;

// import React, { useState, useEffect } from 'react';
// import './HomePage.css';

// const mockStock = {
//   symbol: "BTC",
//   price: "42,500.00",
//   change: "+5.2%",
//   marketCap: "800B",
//   volume: "24B",
//   high: "43,000",
//   low: "41,200"
// };

// const HomePage = () => {
//   const [isTraderMode, setIsTraderMode] = useState(false);

//   useEffect(() => {
//     const savedMode = localStorage.getItem("mode");
//     if (savedMode === "TRADER") setIsTraderMode(true);
//   }, []);

//   const toggleMode = () => {
//     const newMode = !isTraderMode;
//     setIsTraderMode(newMode);
//     localStorage.setItem("mode", newMode ? "TRADER" : "INVESTOR");
//   };

//   return (
//     <div className={`dashboard-container ${isTraderMode ? "trader-theme" : "investor-theme"}`}>
      
//       <header className="navbar">
//          <a href="/" className="brand flex items-center gap-3">
//     <img
//       src="/radar-logo.jpeg"
//       alt="Radar Logo"
//       className="w-10 h-10 rounded-full object-cover"
//     />
//     <span className="brand-name">RADAR</span>
//     </a>
        

//         <div className="toggle-wrapper">
//           <span className={!isTraderMode ? "active-label" : ""}>Investor</span>
//           <label className="switch">
//             <input type="checkbox" checked={isTraderMode} onChange={toggleMode} />
//             <span className="slider round"></span>
//           </label>
//           <span className={isTraderMode ? "active-label" : ""}>Trader</span>
//         </div>

//         <div className="nav-buttons">
//           <a href="/login" className="nav-btn login-btn">Login</a>
//           <a href="/register" className="nav-btn register-btn">Register</a>
//         </div>
//       </header>

//       <main className="content">
//         {isTraderMode ? <TraderView data={mockStock} /> : <InvestorView data={mockStock} />}
//       </main>
//     </div>
//   );
// };

// const InvestorView = ({ data }) => (
//   <div className="view-container investor">
//     <div className="welcome-card">
//       <h2>
//         Good {new Date().getHours() < 12 ? "Morning" : "Evening"}, Investor ☀️
//       </h2>
//       <p>Your portfolio is up by 12% this week.</p>
//     </div>

//     <div className="simple-card">
//       <h3>Bitcoin (BTC)</h3>
//       <div className="big-price">${data.price}</div>
//       <div className="trend-green">Likely to grow 🚀</div>
//       <p className="description">
//         Bitcoin is the leading cryptocurrency, suitable for long-term holding.
//       </p>
//     </div>

//     <div className="chart-placeholder">
//       [Simple Line Chart Placeholder]
//       <br />
//       <small>Steady Growth Curve</small>
//     </div>
//   </div>
// );

// const TraderView = ({ data }) => (
//   <div className="view-container trader">
//     <div className="ticker-bar">
//       BTC: {data.price} | ETH: 2,200 | EUR/USD: 1.09
//     </div>

//     <div className="trader-grid">
//       <div className="panel chart-panel">
//         <h3>BTC/USD Technical Chart</h3>
//         <div className="chart-box-dark">
//           [Candlestick / RSI / MACD]
//         </div>
//       </div>

//       <div className="panel data-panel">
//         <h3>Order Book</h3>
//         <table>
//           <thead>
//             <tr><th>Price</th><th>Size</th></tr>
//           </thead>
//           <tbody>
//             <tr style={{ color: '#ff4d4d' }}><td>42,505</td><td>0.5</td></tr>
//             <tr style={{ color: '#ff4d4d' }}><td>42,502</td><td>1.2</td></tr>
//             <tr style={{ color: '#00cc00' }}><td>42,500</td><td>5.0</td></tr>
//             <tr style={{ color: '#00cc00' }}><td>42,498</td><td>2.3</td></tr>
//           </tbody>
//         </table>

//         <div className="stats-box">
//           <p>24h High: {data.high}</p>
//           <p>24h Low: {data.low}</p>
//           <p>Volume: {data.volume}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default HomePage;


import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./HomePage.css";

/* ---------------- MOCK DATA ---------------- */

const mockStock = {
  symbol: "BTC",
  price: "42,500.00",
  high: "43,000",
  low: "41,200",
  volume: "24B",
};

const priceData = [
  { time: "10:00", price: 41200 },
  { time: "11:00", price: 41800 },
  { time: "12:00", price: 42500 },
  { time: "13:00", price: 42100 },
  { time: "14:00", price: 43000 },
  { time: "15:00", price: 42800 },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function HomePage() {
  const [isTraderMode, setIsTraderMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "TRADER") setIsTraderMode(true);
  }, []);

  const toggleMode = () => {
    const newMode = !isTraderMode;
    setIsTraderMode(newMode);
    localStorage.setItem("mode", newMode ? "TRADER" : "INVESTOR");
  };

  return (
    <div
      className={`dashboard-container ${
        isTraderMode ? "trader-theme" : "investor-theme"
      }`}
    >
      {/* ---------------- NAVBAR ---------------- */}
      <header className="navbar">
        <a href="/" className="brand flex items-center gap-3">
    <img
      src="/radar-logo.jpeg"
      alt="Radar Logo"
      className="w-10 h-10 rounded-full object-cover"
    />
          <span className="brand-name">RADAR</span>
        </a>

        <div className="toggle-wrapper">
          <span className={!isTraderMode ? "active-label" : ""}>Investor</span>
          <label className="switch">
            <input type="checkbox" checked={isTraderMode} onChange={toggleMode} />
            <span className="slider round"></span>
          </label>
          <span className={isTraderMode ? "active-label" : ""}>Trader</span>
        </div>

        <div className="nav-buttons">
          <a href="/login" className="nav-btn login-btn">Login</a>
          <a href="/register" className="nav-btn register-btn">Register</a>
        </div>
      </header>

      {/* ---------------- CONTENT ---------------- */}
      <main className="content">
        {isTraderMode ? (
          <TraderView data={mockStock} />
        ) : (
          <InvestorView data={mockStock} />
        )}
      </main>
    </div>
  );
}

/* ---------------- INVESTOR VIEW ---------------- */

function InvestorView({ data }) {
  return (
    <div className="view-container investor">
      <div className="welcome-card">
        <h2>Good Investor 👋</h2>
        <p>Your portfolio is up by 12% this week.</p>
      </div>

      <div className="simple-card">
        <h3>Bitcoin (BTC)</h3>
        <div className="big-price">${data.price}</div>
        <div className="trend-green">Likely to grow 🚀</div>
      </div>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={priceData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ---------------- TRADER VIEW ---------------- */

function TraderView({ data }) {
  return (
    <div className="view-container trader">
      <div className="ticker-bar">
        BTC: {data.price} | ETH: 2,200 | EUR/USD: 1.09
      </div>

      <div className="trader-grid">
        <div className="panel chart-panel">
          <h3>BTC/USD Technical Chart</h3>
          <div className="chart-box-dark">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#38bdf8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel data-panel">
          <h3>Market Stats</h3>
          <p>24h High: {data.high}</p>
          <p>24h Low: {data.low}</p>
          <p>Volume: {data.volume}</p>
        </div>
      </div>
    </div>
  );
}
