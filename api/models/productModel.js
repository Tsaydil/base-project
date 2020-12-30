const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    handle: String,
    body_html: String,
    published_at: String,
    created_at: String,
    updated_at: String,
    vendor: String,
    product_type: String,
    tags: [ ],
    variants: [
        {
            id: Number,
            title: String,
            option1: String,
            option2: String,
            option3: String,
            sku: String,
            requires_shipping: Boolean,
            taxable: Boolean,
            available: Boolean,
            price: String,
            grams: Number,
            compare_at_price: String,
            position: Number,
            product_id: Number,
            created_at: String,
            updated_at: String
        }
    ],
    images: [
        {
            id: Number,
            created_at: String,
            position: Number,
            updated_at: String,
            product_id: Number,
            variant_ids: [ ],
            src: String,
            width: Number,
            height: Number
        }
    ],
    options: [
        {
            name: String,
            position: Number,
            values: [
                String
            ]
        }
    ]
});

module.exports =  test_collection = mongoose.model('test_collection', productSchema);


