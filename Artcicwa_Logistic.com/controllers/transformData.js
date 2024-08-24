function transformDeliveryData(data) {
    return {
        rootId: data[0].root_id,
        orderId: data[0].order_id,
        amazonOrderId: data[0].amazon_order_id,
        orderDate: new Date(data[0].order_date).toISOString().split('T')[0],
        status: data[0].status,
        dateSubmitted: new Date(data[0].date_submitted).toISOString().split('T')[0],
        shippingService: data[0].shipping_service,
        salesChannel: data[0].sales_channel,
        packingSlipComments: data[0].packing_slip_comments,
        amazonTrackingCode: data[0].amazon_tracking_number,
        trackingCode: data[0].tracking_code,
        emailAddress: data[0].email_address,
        orderDetails: data.map(detail => ({
            id: detail.content_id,
            element: {
                emailAddress: detail.email_address,
                orderId: detail.order_id,
                productId: detail.product_id,
                productTitle: detail.product_title,
                count: detail.count,
                branchId: detail.branch_id
            }
        })),
        shipmentDetails: data.map(detail => ({
            id: detail.detail_id,
            element: {
                orderId: detail.order_id,
                trackingCode: detail.tracking_code,
                carrierTrackingCode: detail.carrier_tracking_code,
                shipDate: new Date(detail.ship_date).toISOString().split('T')[0],
                deliveryEstimate: new Date(detail.delivery_estimate).toISOString().split('T')[0],
                carrier: detail.carrier,
                name: detail.name,
                addressLine1: detail.address_line_1,
                addressLine2: detail.address_line_2,
                city: detail.city,
                postalCode: detail.postal_code,
                country: detail.country,
                phone: detail.phone,
                emailAddress: detail.email_address,
                branchId: detail.branch_id
            }
        })),
        shipmentEvents: data.map(detail => ({
            id: detail.event_id,
            detailId: detail.event_detail_id,
            element: {
                trackingCode: detail.tracking_code,
                carrierTrackingCode: detail.carrier_tracking_code,
                eventDate: new Date(detail.event_date).toISOString().split('T')[0],
                eventTime: detail.event_time,
                location: detail.location,
                eventDetails: detail.event_details,
                branchId: detail.branch_id
            }
        }))
    };
}

module.exports = transformDeliveryData;
