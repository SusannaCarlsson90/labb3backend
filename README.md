# Laboration 3 - Webbtjänst för CV

Detta projekt är en RESTful webbtjänst byggd för att hantera arbetserfarenheter i en CV-applikation. Den fungerar som backend och kommunicerar med en MongoDB-databas.

## Tekniker

- **Node.js** & **Express** för servermiljö och routing.
- **MongoDB** & **Mongoose** för datalagring och objektmodellering.
- **CORS** för att tillåta anrop från frontend.

## API Endpoints

Webbtjänsten stödjer följande CRUD-operationer:

- `GET /workexperiences` - Hämtar alla sparade arbetserfarenheter.
- `POST /workexperiences` - Lägger till en ny arbetserfarenhet.
- `PUT /workexperiences/:id` - Uppdaterar en befintlig erfarenhet baserat på ID.
- `DELETE /workexperiences/:id` - Raderar en specifik erfarenhet baserat på ID.

## Installation

1. Klona repot.
2. Kör `npm install`.
3. Skapa en `.env`-fil med din `MONGO_URI` och `PORT`.
4. Starta servern med `npm start` eller `node server.js`.

## Video-demonstration

Länk till videopresentation: https://www.loom.com/share/6739742e1c4140f9870206c981085338
