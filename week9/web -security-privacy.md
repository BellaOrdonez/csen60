# Web security and privacy

## Security

- Potential Security Oversits
    - no user authentication
    - weak authentication
    - sessions dont time out

- Cross Site Scripting
    - what if HTML includes < script> tags?
    - replce the page with a new one
    - pass information from the aoge toa foreign page
    - download users cookies (passwords) for other sites
    - How? provides a link then does =< script> and give user a fake link to a foreign website
    - Mitigation: 
    - dont allow any HTML to be iserted
    - dont allow any malicous HTML to be inserted

- Distributed Denial of Service
    - DDoS
    - Overwhelm a server with malicous requests to block regualr users
    - REquests dont come from one machine
    - attacker uses a number of controlled machines often compromised

- DDoS Mitigation
    - rate limiting
        - limit volume fo requests from a user
    - throw out excess traffic at random
    - distribute traffic across network

- Network Security
    - Need to send requests: GET


- Encrryption and Decryption
    - Encryption: 
        - ensures pricay within an organization and on the interjnet
    - Decryption: 
        - process of converting ----

- Browser-Server Communication
    - can use encrypted communication in a web app
        - HTTPS represents an encrypted (secure) connection
    - HTTPS is secure HTTP

- HTTPS Usage
    - for passwords person informatiojn
    - HTTPS is more secure

- Secure Socket Layer
    - SSL provifes secure commmunication between a cluent ans server by using :
        - server abd client digital certificates for authentication etc.

- How does it know its secure?
    - Digital Certificate
        - a form of a an asymmertric key

- Certificate Autority
    - trusted third party for security authentication 


## Privacy

- Cookies
    - is a name/value pair created by a website to store information on your computer

-  Data Collection: Form/User Entry
    - social networks
        - share info with others, connect with frineds
    - online shopping
        - credit card payments, home address for shipping
    - online finances
        - banking, investmnets, tax

- Data Collection: Cookies
    - user authentication
    -sute preferencescontecnts of shopping cat

- Data Collection: Behavior Logging
    - any action a user takes on a webpage can be logged
    - HTML event listneres
    - time between actions

- Data Applications: Ad Trackiing
    - how are all theses products free?
        - facebook, twitte, google, youtube
    - goal: convert an ad seen on screen to some action
    - better targeted the ad, the better chnace of a concersion ($$)

- Data Applications: Search
    - improve results

- Data Applications: Drive a metirc
    - 
- Lots of Sensitive information
    - PII: Personallu Identifiable Informaation
    - financial information
    - legally Sensitive

- Pricavy Policy
    - generally considered legally binding
    - statement daying what the website does with nay information it collects
    - written in dense legal language
    - 

- Role of PP
    - Specify what an appplication can do with the unfoamtion

- Developer - Legal Responsibiliy
    - privacy has legal implications
    - developer is respinible for breaches of Policy

- GDPR
    - Gneral Data Protection regulation
    - protects citixans of European unfoamtion
    - user must provide consent
    - consumers have the right to be "forgotten"

