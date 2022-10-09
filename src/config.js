const apikey_apilayer = "UcfoRgyT3R4AgywWBqtNuf43lhTN2afP";         //b6LGL9i7bzi1Zyvrt3278rL53rBJjQzG    OTG8D85bFqTGY3chqa4Uvo8hLvTvRmX4     real: UcfoRgyT3R4AgywWBqtNuf43lhTN2afP

const request_time_apilyaer = 60*60*8;        // request time to get apilayer per second, init= 5

const multiplyer = {
    //  Buy Markdown Value
    markdown_buy: [
        0.9985,             // Bitcoin    
        0.995,              // Ethereum   
        0.99,               // Doge       
        0.99,               // Dash       
        0.99,               // Monero(XMR)
        0.9930,             // USDC       
        0.98,               // CAD        
        0.9930,             // EUR        
        0.98,               // AED        
        0.98,               // INR        
        0.98                // PKR        
    ],
    //  Sell Markup Value
    markup_sell: [
        1.0015,             // Bitcoin    
        1.005,              // Ethereum   
        1.01,               // Doge       
        1.01,               // Dash       
        1.01,               // Monero(XMR)
        1.0070,             // USDC       
        1.02,               // CAD         
        1.0070,             // EUR        
        1.02,               // AED        
        1.02,               // INR        
        1.02                // PKR        
    ],
}

module.exports = { apikey_apilayer, request_time_apilyaer, multiplyer }