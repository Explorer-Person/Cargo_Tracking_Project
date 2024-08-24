const { QueryTypes } = require("sequelize");
const sequelize = require("../db/myDB");

class Queries {
    static getDelivery = async (tracking_code) => {
        if (tracking_code) {
          try {
            const order = await sequelize.query(
              `SELECT *
              FROM orders
              LEFT JOIN order_details ON orders.root_id = order_details.branch_id
              LEFT JOIN shipment_details ON orders.root_id = shipment_details.branch_id
              LEFT JOIN shipment_events ON shipment_details.detail_id = shipment_events.event_detail_id
              WHERE orders.tracking_code = :tracking_code
              ORDER BY shipment_events.event_date ASC, shipment_events.event_time ASC;`,
              {
                replacements: { tracking_code: tracking_code},
                type: QueryTypes.SELECT,
              }
            );
            return order;
          } catch (error) {
            throw new Error('Error executing query: ' + error.message);
          }
        } else {
          throw new Error('Invalid rootId');
        }
      };
} 
module.exports = Queries;