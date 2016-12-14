//
// Definitions for schema: http://iaas.uni-stuttgart.de/labs/FlowSOG
//  file:/mnt/c/Users/steiler/Documents/Repository/BPM_Lab/T1-SOGShop-sync/rev0/bpm-lab.wsdl#types1
//
//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}productList
//
function WSDL_productList () {
    this.typeMarker = 'WSDL_productList';
    this._product = [];
}

//
// accessor is WSDL_productList.prototype.getProduct
// element get for product
// - element type is {http://iaas.uni-stuttgart.de/labs/FlowSOG}product
// - required element
// - array
//
// element set for product
// setter function is is WSDL_productList.prototype.setProduct
//
function WSDL_productList_getProduct() { return this._product;}

WSDL_productList.prototype.getProduct = WSDL_productList_getProduct;

function WSDL_productList_setProduct(value) { this._product = value;}

WSDL_productList.prototype.setProduct = WSDL_productList_setProduct;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}productList
//
function WSDL_productList_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._product != null) {
      for (var ax = 0;ax < this._product.length;ax ++) {
       if (this._product[ax] == null) {
        xml = xml + '<jns0:product/>';
       } else {
        xml = xml + this._product[ax].serialize(cxfjsutils, 'jns0:product', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_productList.prototype.serialize = WSDL_productList_serialize;

function WSDL_productList_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_productList();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing product');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'product')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = WSDL_product_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'product'));
     newobject.setProduct(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}order
//
function WSDL_order () {
    this.typeMarker = 'WSDL_order';
    this._orderId = null;
    this._customerId = '';
    this._products = null;
    this._shippingAddress = '';
    this._paymentDetails = null;
    this._status = null;
}

//
// accessor is WSDL_order.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for orderId
// setter function is is WSDL_order.prototype.setOrderId
//
function WSDL_order_getOrderId() { return this._orderId;}

WSDL_order.prototype.getOrderId = WSDL_order_getOrderId;

function WSDL_order_setOrderId(value) { this._orderId = value;}

WSDL_order.prototype.setOrderId = WSDL_order_setOrderId;
//
// accessor is WSDL_order.prototype.getCustomerId
// element get for customerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for customerId
// setter function is is WSDL_order.prototype.setCustomerId
//
function WSDL_order_getCustomerId() { return this._customerId;}

WSDL_order.prototype.getCustomerId = WSDL_order_getCustomerId;

function WSDL_order_setCustomerId(value) { this._customerId = value;}

WSDL_order.prototype.setCustomerId = WSDL_order_setCustomerId;
//
// accessor is WSDL_order.prototype.getProducts
// element get for products
// - element type is null
// - required element
//
// element set for products
// setter function is is WSDL_order.prototype.setProducts
//
function WSDL_order_getProducts() { return this._products;}

WSDL_order.prototype.getProducts = WSDL_order_getProducts;

function WSDL_order_setProducts(value) { this._products = value;}

WSDL_order.prototype.setProducts = WSDL_order_setProducts;
//
// accessor is WSDL_order.prototype.getShippingAddress
// element get for shippingAddress
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for shippingAddress
// setter function is is WSDL_order.prototype.setShippingAddress
//
function WSDL_order_getShippingAddress() { return this._shippingAddress;}

WSDL_order.prototype.getShippingAddress = WSDL_order_getShippingAddress;

function WSDL_order_setShippingAddress(value) { this._shippingAddress = value;}

WSDL_order.prototype.setShippingAddress = WSDL_order_setShippingAddress;
//
// accessor is WSDL_order.prototype.getPaymentDetails
// element get for paymentDetails
// - element type is null
// - required element
//
// element set for paymentDetails
// setter function is is WSDL_order.prototype.setPaymentDetails
//
function WSDL_order_getPaymentDetails() { return this._paymentDetails;}

WSDL_order.prototype.getPaymentDetails = WSDL_order_getPaymentDetails;

function WSDL_order_setPaymentDetails(value) { this._paymentDetails = value;}

WSDL_order.prototype.setPaymentDetails = WSDL_order_setPaymentDetails;
//
// accessor is WSDL_order.prototype.getStatus
// element get for status
// - element type is null
// - optional element
//
// element set for status
// setter function is is WSDL_order.prototype.setStatus
//
function WSDL_order_getStatus() { return this._status;}

WSDL_order.prototype.getStatus = WSDL_order_getStatus;

function WSDL_order_setStatus(value) { this._status = value;}

WSDL_order.prototype.setStatus = WSDL_order_setStatus;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}order
//
function WSDL_order_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._orderId != null) {
      xml = xml + '<jns0:orderId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
      xml = xml + '</jns0:orderId>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:customerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._customerId);
     xml = xml + '</jns0:customerId>';
    }
    // block for local variables
    {
     xml = xml + this._products.serialize(cxfjsutils, 'jns0:products', null);
    }
    // block for local variables
    {
     xml = xml + '<jns0:shippingAddress>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._shippingAddress);
     xml = xml + '</jns0:shippingAddress>';
    }
    // block for local variables
    {
     xml = xml + this._paymentDetails.serialize(cxfjsutils, 'jns0:paymentDetails', null);
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns0:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns0:status>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_order.prototype.serialize = WSDL_order_serialize;

function WSDL_order_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_order();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'orderId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setOrderId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCustomerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing products');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = WSDL_products_deserialize(cxfjsutils, curElement);
    }
    newobject.setProducts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing shippingAddress');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setShippingAddress(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing paymentDetails');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = WSDL_paymentDetails_deserialize(cxfjsutils, curElement);
    }
    newobject.setPaymentDetails(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}productStatus
//
function WSDL_productStatus () {
    this.typeMarker = 'WSDL_productStatus';
    this._currentAvailability = 'available';
    this._availableAgainInDays = null;
}

//
// accessor is WSDL_productStatus.prototype.getCurrentAvailability
// element get for currentAvailability
// - element type is null
// - required element
//
// element set for currentAvailability
// setter function is is WSDL_productStatus.prototype.setCurrentAvailability
//
function WSDL_productStatus_getCurrentAvailability() { return this._currentAvailability;}

WSDL_productStatus.prototype.getCurrentAvailability = WSDL_productStatus_getCurrentAvailability;

function WSDL_productStatus_setCurrentAvailability(value) { this._currentAvailability = value;}

WSDL_productStatus.prototype.setCurrentAvailability = WSDL_productStatus_setCurrentAvailability;
//
// accessor is WSDL_productStatus.prototype.getAvailableAgainInDays
// element get for availableAgainInDays
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - optional element
//
// element set for availableAgainInDays
// setter function is is WSDL_productStatus.prototype.setAvailableAgainInDays
//
function WSDL_productStatus_getAvailableAgainInDays() { return this._availableAgainInDays;}

WSDL_productStatus.prototype.getAvailableAgainInDays = WSDL_productStatus_getAvailableAgainInDays;

function WSDL_productStatus_setAvailableAgainInDays(value) { this._availableAgainInDays = value;}

WSDL_productStatus.prototype.setAvailableAgainInDays = WSDL_productStatus_setAvailableAgainInDays;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}productStatus
//
function WSDL_productStatus_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:currentAvailability>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._currentAvailability);
     xml = xml + '</jns0:currentAvailability>';
    }
    // block for local variables
    {
     if (this._availableAgainInDays != null) {
      xml = xml + '<jns0:availableAgainInDays>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._availableAgainInDays);
      xml = xml + '</jns0:availableAgainInDays>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_productStatus.prototype.serialize = WSDL_productStatus_serialize;

function WSDL_productStatus_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_productStatus();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing currentAvailability');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCurrentAvailability(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing availableAgainInDays');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'availableAgainInDays')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAvailableAgainInDays(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}product
//
function WSDL_product () {
    this.typeMarker = 'WSDL_product';
    this._id = '';
    this._name = null;
    this._producer = null;
    this._weight = null;
    this._price = null;
    this._status = null;
}

//
// accessor is WSDL_product.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for id
// setter function is is WSDL_product.prototype.setId
//
function WSDL_product_getId() { return this._id;}

WSDL_product.prototype.getId = WSDL_product_getId;

function WSDL_product_setId(value) { this._id = value;}

WSDL_product.prototype.setId = WSDL_product_setId;
//
// accessor is WSDL_product.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is WSDL_product.prototype.setName
//
function WSDL_product_getName() { return this._name;}

WSDL_product.prototype.getName = WSDL_product_getName;

function WSDL_product_setName(value) { this._name = value;}

WSDL_product.prototype.setName = WSDL_product_setName;
//
// accessor is WSDL_product.prototype.getProducer
// element get for producer
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for producer
// setter function is is WSDL_product.prototype.setProducer
//
function WSDL_product_getProducer() { return this._producer;}

WSDL_product.prototype.getProducer = WSDL_product_getProducer;

function WSDL_product_setProducer(value) { this._producer = value;}

WSDL_product.prototype.setProducer = WSDL_product_setProducer;
//
// accessor is WSDL_product.prototype.getWeight
// element get for weight
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - optional element
//
// element set for weight
// setter function is is WSDL_product.prototype.setWeight
//
function WSDL_product_getWeight() { return this._weight;}

WSDL_product.prototype.getWeight = WSDL_product_getWeight;

function WSDL_product_setWeight(value) { this._weight = value;}

WSDL_product.prototype.setWeight = WSDL_product_setWeight;
//
// accessor is WSDL_product.prototype.getPrice
// element get for price
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - optional element
//
// element set for price
// setter function is is WSDL_product.prototype.setPrice
//
function WSDL_product_getPrice() { return this._price;}

WSDL_product.prototype.getPrice = WSDL_product_getPrice;

function WSDL_product_setPrice(value) { this._price = value;}

WSDL_product.prototype.setPrice = WSDL_product_setPrice;
//
// accessor is WSDL_product.prototype.getStatus
// element get for status
// - element type is {http://iaas.uni-stuttgart.de/labs/FlowSOG}productStatus
// - optional element
//
// element set for status
// setter function is is WSDL_product.prototype.setStatus
//
function WSDL_product_getStatus() { return this._status;}

WSDL_product.prototype.getStatus = WSDL_product_getStatus;

function WSDL_product_setStatus(value) { this._status = value;}

WSDL_product.prototype.setStatus = WSDL_product_setStatus;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}product
//
function WSDL_product_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</jns0:id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<jns0:name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</jns0:name>';
     }
    }
    // block for local variables
    {
     if (this._producer != null) {
      xml = xml + '<jns0:producer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._producer);
      xml = xml + '</jns0:producer>';
     }
    }
    // block for local variables
    {
     if (this._weight != null) {
      xml = xml + '<jns0:weight>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._weight);
      xml = xml + '</jns0:weight>';
     }
    }
    // block for local variables
    {
     if (this._price != null) {
      xml = xml + '<jns0:price>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._price);
      xml = xml + '</jns0:price>';
     }
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + this._status.serialize(cxfjsutils, 'jns0:status', null);
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_product.prototype.serialize = WSDL_product_serialize;

function WSDL_product_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_product();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing producer');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'producer')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setProducer(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing weight');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'weight')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setWeight(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing price');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'price')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPrice(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = WSDL_productStatus_deserialize(cxfjsutils, curElement);
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCosts
//
function WSDL_calcTransactionCosts () {
    this.typeMarker = 'WSDL_calcTransactionCosts';
    this._orderId = '';
}

//
// accessor is WSDL_calcTransactionCosts.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_calcTransactionCosts.prototype.setOrderId
//
function WSDL_calcTransactionCosts_getOrderId() { return this._orderId;}

WSDL_calcTransactionCosts.prototype.getOrderId = WSDL_calcTransactionCosts_getOrderId;

function WSDL_calcTransactionCosts_setOrderId(value) { this._orderId = value;}

WSDL_calcTransactionCosts.prototype.setOrderId = WSDL_calcTransactionCosts_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCosts
//
function WSDL_calcTransactionCosts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcTransactionCosts.prototype.serialize = WSDL_calcTransactionCosts_serialize;

function WSDL_calcTransactionCosts_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcTransactionCosts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}cancelOrder
//
function WSDL_cancelOrder () {
    this.typeMarker = 'WSDL_cancelOrder';
    this._orderId = '';
}

//
// accessor is WSDL_cancelOrder.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_cancelOrder.prototype.setOrderId
//
function WSDL_cancelOrder_getOrderId() { return this._orderId;}

WSDL_cancelOrder.prototype.getOrderId = WSDL_cancelOrder_getOrderId;

function WSDL_cancelOrder_setOrderId(value) { this._orderId = value;}

WSDL_cancelOrder.prototype.setOrderId = WSDL_cancelOrder_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}cancelOrder
//
function WSDL_cancelOrder_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_cancelOrder.prototype.serialize = WSDL_cancelOrder_serialize;

function WSDL_cancelOrder_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_cancelOrder();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}conductPayment
//
function WSDL_conductPayment () {
    this.typeMarker = 'WSDL_conductPayment';
    this._orderId = '';
    this._amount = '';
}

//
// accessor is WSDL_conductPayment.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_conductPayment.prototype.setOrderId
//
function WSDL_conductPayment_getOrderId() { return this._orderId;}

WSDL_conductPayment.prototype.getOrderId = WSDL_conductPayment_getOrderId;

function WSDL_conductPayment_setOrderId(value) { this._orderId = value;}

WSDL_conductPayment.prototype.setOrderId = WSDL_conductPayment_setOrderId;
//
// accessor is WSDL_conductPayment.prototype.getAmount
// element get for amount
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
//
// element set for amount
// setter function is is WSDL_conductPayment.prototype.setAmount
//
function WSDL_conductPayment_getAmount() { return this._amount;}

WSDL_conductPayment.prototype.getAmount = WSDL_conductPayment_getAmount;

function WSDL_conductPayment_setAmount(value) { this._amount = value;}

WSDL_conductPayment.prototype.setAmount = WSDL_conductPayment_setAmount;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}conductPayment
//
function WSDL_conductPayment_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:amount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._amount);
     xml = xml + '</jns0:amount>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_conductPayment.prototype.serialize = WSDL_conductPayment_serialize;

function WSDL_conductPayment_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_conductPayment();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing amount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setAmount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}listProductsResponse
//
function WSDL_listProductsResponse () {
    this.typeMarker = 'WSDL_listProductsResponse';
    this._productList = null;
}

//
// accessor is WSDL_listProductsResponse.prototype.getProductList
// element get for productList
// - element type is {http://iaas.uni-stuttgart.de/labs/FlowSOG}productList
// - required element
//
// element set for productList
// setter function is is WSDL_listProductsResponse.prototype.setProductList
//
function WSDL_listProductsResponse_getProductList() { return this._productList;}

WSDL_listProductsResponse.prototype.getProductList = WSDL_listProductsResponse_getProductList;

function WSDL_listProductsResponse_setProductList(value) { this._productList = value;}

WSDL_listProductsResponse.prototype.setProductList = WSDL_listProductsResponse_setProductList;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}listProductsResponse
//
function WSDL_listProductsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._productList.serialize(cxfjsutils, 'jns0:productList', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_listProductsResponse.prototype.serialize = WSDL_listProductsResponse_serialize;

function WSDL_listProductsResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_listProductsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing productList');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = WSDL_productList_deserialize(cxfjsutils, curElement);
    }
    newobject.setProductList(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCosts
//
function WSDL_calcShipmentCosts () {
    this.typeMarker = 'WSDL_calcShipmentCosts';
    this._orderId = '';
}

//
// accessor is WSDL_calcShipmentCosts.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_calcShipmentCosts.prototype.setOrderId
//
function WSDL_calcShipmentCosts_getOrderId() { return this._orderId;}

WSDL_calcShipmentCosts.prototype.getOrderId = WSDL_calcShipmentCosts_getOrderId;

function WSDL_calcShipmentCosts_setOrderId(value) { this._orderId = value;}

WSDL_calcShipmentCosts.prototype.setOrderId = WSDL_calcShipmentCosts_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCosts
//
function WSDL_calcShipmentCosts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcShipmentCosts.prototype.serialize = WSDL_calcShipmentCosts_serialize;

function WSDL_calcShipmentCosts_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcShipmentCosts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}shipProducts
//
function WSDL_shipProducts () {
    this.typeMarker = 'WSDL_shipProducts';
    this._orderId = '';
    this._date = '';
}

//
// accessor is WSDL_shipProducts.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_shipProducts.prototype.setOrderId
//
function WSDL_shipProducts_getOrderId() { return this._orderId;}

WSDL_shipProducts.prototype.getOrderId = WSDL_shipProducts_getOrderId;

function WSDL_shipProducts_setOrderId(value) { this._orderId = value;}

WSDL_shipProducts.prototype.setOrderId = WSDL_shipProducts_setOrderId;
//
// accessor is WSDL_shipProducts.prototype.getDate
// element get for date
// - element type is {http://www.w3.org/2001/XMLSchema}date
// - required element
//
// element set for date
// setter function is is WSDL_shipProducts.prototype.setDate
//
function WSDL_shipProducts_getDate() { return this._date;}

WSDL_shipProducts.prototype.getDate = WSDL_shipProducts_getDate;

function WSDL_shipProducts_setDate(value) { this._date = value;}

WSDL_shipProducts.prototype.setDate = WSDL_shipProducts_setDate;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}shipProducts
//
function WSDL_shipProducts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._date);
     xml = xml + '</jns0:date>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_shipProducts.prototype.serialize = WSDL_shipProducts_serialize;

function WSDL_shipProducts_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_shipProducts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCostsResponse
//
function WSDL_calcOrderCostsResponse () {
    this.typeMarker = 'WSDL_calcOrderCostsResponse';
    this._orderCosts = '';
}

//
// accessor is WSDL_calcOrderCostsResponse.prototype.getOrderCosts
// element get for orderCosts
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
//
// element set for orderCosts
// setter function is is WSDL_calcOrderCostsResponse.prototype.setOrderCosts
//
function WSDL_calcOrderCostsResponse_getOrderCosts() { return this._orderCosts;}

WSDL_calcOrderCostsResponse.prototype.getOrderCosts = WSDL_calcOrderCostsResponse_getOrderCosts;

function WSDL_calcOrderCostsResponse_setOrderCosts(value) { this._orderCosts = value;}

WSDL_calcOrderCostsResponse.prototype.setOrderCosts = WSDL_calcOrderCostsResponse_setOrderCosts;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCostsResponse
//
function WSDL_calcOrderCostsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderCosts);
     xml = xml + '</jns0:orderCosts>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcOrderCostsResponse.prototype.serialize = WSDL_calcOrderCostsResponse_serialize;

function WSDL_calcOrderCostsResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcOrderCostsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailability
//
function WSDL_checkAvailability () {
    this.typeMarker = 'WSDL_checkAvailability';
    this._productId = '';
}

//
// accessor is WSDL_checkAvailability.prototype.getProductId
// element get for productId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for productId
// setter function is is WSDL_checkAvailability.prototype.setProductId
//
function WSDL_checkAvailability_getProductId() { return this._productId;}

WSDL_checkAvailability.prototype.getProductId = WSDL_checkAvailability_getProductId;

function WSDL_checkAvailability_setProductId(value) { this._productId = value;}

WSDL_checkAvailability.prototype.setProductId = WSDL_checkAvailability_setProductId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailability
//
function WSDL_checkAvailability_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:productId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._productId);
     xml = xml + '</jns0:productId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_checkAvailability.prototype.serialize = WSDL_checkAvailability_serialize;

function WSDL_checkAvailability_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_checkAvailability();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing productId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setProductId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}onFinishCheckAvailability
//
function WSDL_onFinishCheckAvailability () {
    this.typeMarker = 'WSDL_onFinishCheckAvailability';
    this._customerId = '';
    this._productList = null;
}

//
// accessor is WSDL_onFinishCheckAvailability.prototype.getCustomerId
// element get for customerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for customerId
// setter function is is WSDL_onFinishCheckAvailability.prototype.setCustomerId
//
function WSDL_onFinishCheckAvailability_getCustomerId() { return this._customerId;}

WSDL_onFinishCheckAvailability.prototype.getCustomerId = WSDL_onFinishCheckAvailability_getCustomerId;

function WSDL_onFinishCheckAvailability_setCustomerId(value) { this._customerId = value;}

WSDL_onFinishCheckAvailability.prototype.setCustomerId = WSDL_onFinishCheckAvailability_setCustomerId;
//
// accessor is WSDL_onFinishCheckAvailability.prototype.getProductList
// element get for productList
// - element type is {http://iaas.uni-stuttgart.de/labs/FlowSOG}productList
// - required element
//
// element set for productList
// setter function is is WSDL_onFinishCheckAvailability.prototype.setProductList
//
function WSDL_onFinishCheckAvailability_getProductList() { return this._productList;}

WSDL_onFinishCheckAvailability.prototype.getProductList = WSDL_onFinishCheckAvailability_getProductList;

function WSDL_onFinishCheckAvailability_setProductList(value) { this._productList = value;}

WSDL_onFinishCheckAvailability.prototype.setProductList = WSDL_onFinishCheckAvailability_setProductList;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}onFinishCheckAvailability
//
function WSDL_onFinishCheckAvailability_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:customerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._customerId);
     xml = xml + '</jns0:customerId>';
    }
    // block for local variables
    {
     xml = xml + this._productList.serialize(cxfjsutils, 'jns0:productList', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_onFinishCheckAvailability.prototype.serialize = WSDL_onFinishCheckAvailability_serialize;

function WSDL_onFinishCheckAvailability_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_onFinishCheckAvailability();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCustomerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing productList');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = WSDL_productList_deserialize(cxfjsutils, curElement);
    }
    newobject.setProductList(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCostsResponse
//
function WSDL_calcTransactionCostsResponse () {
    this.typeMarker = 'WSDL_calcTransactionCostsResponse';
    this._transactionCosts = '';
}

//
// accessor is WSDL_calcTransactionCostsResponse.prototype.getTransactionCosts
// element get for transactionCosts
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
//
// element set for transactionCosts
// setter function is is WSDL_calcTransactionCostsResponse.prototype.setTransactionCosts
//
function WSDL_calcTransactionCostsResponse_getTransactionCosts() { return this._transactionCosts;}

WSDL_calcTransactionCostsResponse.prototype.getTransactionCosts = WSDL_calcTransactionCostsResponse_getTransactionCosts;

function WSDL_calcTransactionCostsResponse_setTransactionCosts(value) { this._transactionCosts = value;}

WSDL_calcTransactionCostsResponse.prototype.setTransactionCosts = WSDL_calcTransactionCostsResponse_setTransactionCosts;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCostsResponse
//
function WSDL_calcTransactionCostsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:transactionCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._transactionCosts);
     xml = xml + '</jns0:transactionCosts>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcTransactionCostsResponse.prototype.serialize = WSDL_calcTransactionCostsResponse_serialize;

function WSDL_calcTransactionCostsResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcTransactionCostsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing transactionCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setTransactionCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityResponse
//
function WSDL_checkAvailabilityResponse () {
    this.typeMarker = 'WSDL_checkAvailabilityResponse';
    this._product = null;
}

//
// accessor is WSDL_checkAvailabilityResponse.prototype.getProduct
// element get for product
// - element type is {http://iaas.uni-stuttgart.de/labs/FlowSOG}product
// - required element
//
// element set for product
// setter function is is WSDL_checkAvailabilityResponse.prototype.setProduct
//
function WSDL_checkAvailabilityResponse_getProduct() { return this._product;}

WSDL_checkAvailabilityResponse.prototype.getProduct = WSDL_checkAvailabilityResponse_getProduct;

function WSDL_checkAvailabilityResponse_setProduct(value) { this._product = value;}

WSDL_checkAvailabilityResponse.prototype.setProduct = WSDL_checkAvailabilityResponse_setProduct;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityResponse
//
function WSDL_checkAvailabilityResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._product.serialize(cxfjsutils, 'jns0:product', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_checkAvailabilityResponse.prototype.serialize = WSDL_checkAvailabilityResponse_serialize;

function WSDL_checkAvailabilityResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_checkAvailabilityResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing product');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = WSDL_product_deserialize(cxfjsutils, curElement);
    }
    newobject.setProduct(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCosts
//
function WSDL_calcOrderCosts () {
    this.typeMarker = 'WSDL_calcOrderCosts';
    this._orderId = '';
}

//
// accessor is WSDL_calcOrderCosts.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_calcOrderCosts.prototype.setOrderId
//
function WSDL_calcOrderCosts_getOrderId() { return this._orderId;}

WSDL_calcOrderCosts.prototype.getOrderId = WSDL_calcOrderCosts_getOrderId;

function WSDL_calcOrderCosts_setOrderId(value) { this._orderId = value;}

WSDL_calcOrderCosts.prototype.setOrderId = WSDL_calcOrderCosts_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCosts
//
function WSDL_calcOrderCosts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcOrderCosts.prototype.serialize = WSDL_calcOrderCosts_serialize;

function WSDL_calcOrderCosts_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcOrderCosts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityAsync
//
function WSDL_checkAvailabilityAsync () {
    this.typeMarker = 'WSDL_checkAvailabilityAsync';
    this._callbackUrl = '';
    this._customerId = '';
    this._productId = [];
}

//
// accessor is WSDL_checkAvailabilityAsync.prototype.getCallbackUrl
// element get for callbackUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for callbackUrl
// setter function is is WSDL_checkAvailabilityAsync.prototype.setCallbackUrl
//
function WSDL_checkAvailabilityAsync_getCallbackUrl() { return this._callbackUrl;}

WSDL_checkAvailabilityAsync.prototype.getCallbackUrl = WSDL_checkAvailabilityAsync_getCallbackUrl;

function WSDL_checkAvailabilityAsync_setCallbackUrl(value) { this._callbackUrl = value;}

WSDL_checkAvailabilityAsync.prototype.setCallbackUrl = WSDL_checkAvailabilityAsync_setCallbackUrl;
//
// accessor is WSDL_checkAvailabilityAsync.prototype.getCustomerId
// element get for customerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for customerId
// setter function is is WSDL_checkAvailabilityAsync.prototype.setCustomerId
//
function WSDL_checkAvailabilityAsync_getCustomerId() { return this._customerId;}

WSDL_checkAvailabilityAsync.prototype.getCustomerId = WSDL_checkAvailabilityAsync_getCustomerId;

function WSDL_checkAvailabilityAsync_setCustomerId(value) { this._customerId = value;}

WSDL_checkAvailabilityAsync.prototype.setCustomerId = WSDL_checkAvailabilityAsync_setCustomerId;
//
// accessor is WSDL_checkAvailabilityAsync.prototype.getProductId
// element get for productId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for productId
// setter function is is WSDL_checkAvailabilityAsync.prototype.setProductId
//
function WSDL_checkAvailabilityAsync_getProductId() { return this._productId;}

WSDL_checkAvailabilityAsync.prototype.getProductId = WSDL_checkAvailabilityAsync_getProductId;

function WSDL_checkAvailabilityAsync_setProductId(value) { this._productId = value;}

WSDL_checkAvailabilityAsync.prototype.setProductId = WSDL_checkAvailabilityAsync_setProductId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityAsync
//
function WSDL_checkAvailabilityAsync_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:callbackUrl>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._callbackUrl);
     xml = xml + '</jns0:callbackUrl>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:customerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._customerId);
     xml = xml + '</jns0:customerId>';
    }
    // block for local variables
    {
     if (this._productId != null) {
      for (var ax = 0;ax < this._productId.length;ax ++) {
       if (this._productId[ax] == null) {
        xml = xml + '<jns0:productId/>';
       } else {
        xml = xml + '<jns0:productId>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._productId[ax]);
        xml = xml + '</jns0:productId>';
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_checkAvailabilityAsync.prototype.serialize = WSDL_checkAvailabilityAsync_serialize;

function WSDL_checkAvailabilityAsync_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_checkAvailabilityAsync();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing callbackUrl');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCallbackUrl(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCustomerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing productId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'productId')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://iaas.uni-stuttgart.de/labs/FlowSOG', 'productId'));
     newobject.setProductId(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}getOrderDetails
//
function WSDL_getOrderDetails () {
    this.typeMarker = 'WSDL_getOrderDetails';
    this._orderId = '';
}

//
// accessor is WSDL_getOrderDetails.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_getOrderDetails.prototype.setOrderId
//
function WSDL_getOrderDetails_getOrderId() { return this._orderId;}

WSDL_getOrderDetails.prototype.getOrderId = WSDL_getOrderDetails_getOrderId;

function WSDL_getOrderDetails_setOrderId(value) { this._orderId = value;}

WSDL_getOrderDetails.prototype.setOrderId = WSDL_getOrderDetails_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}getOrderDetails
//
function WSDL_getOrderDetails_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_getOrderDetails.prototype.serialize = WSDL_getOrderDetails_serialize;

function WSDL_getOrderDetails_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_getOrderDetails();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}listProducts
//
function WSDL_listProducts () {
    this.typeMarker = 'WSDL_listProducts';
    this._limit = '';
}

//
// accessor is WSDL_listProducts.prototype.getLimit
// element get for limit
// - element type is {http://www.w3.org/2001/XMLSchema}integer
// - required element
//
// element set for limit
// setter function is is WSDL_listProducts.prototype.setLimit
//
function WSDL_listProducts_getLimit() { return this._limit;}

WSDL_listProducts.prototype.getLimit = WSDL_listProducts_getLimit;

function WSDL_listProducts_setLimit(value) { this._limit = value;}

WSDL_listProducts.prototype.setLimit = WSDL_listProducts_setLimit;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}listProducts
//
function WSDL_listProducts_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:limit>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._limit);
     xml = xml + '</jns0:limit>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_listProducts.prototype.serialize = WSDL_listProducts_serialize;

function WSDL_listProducts_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_listProducts();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing limit');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLimit(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}storeOrderDetailsResponse
//
function WSDL_storeOrderDetailsResponse () {
    this.typeMarker = 'WSDL_storeOrderDetailsResponse';
    this._orderId = '';
}

//
// accessor is WSDL_storeOrderDetailsResponse.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for orderId
// setter function is is WSDL_storeOrderDetailsResponse.prototype.setOrderId
//
function WSDL_storeOrderDetailsResponse_getOrderId() { return this._orderId;}

WSDL_storeOrderDetailsResponse.prototype.getOrderId = WSDL_storeOrderDetailsResponse_getOrderId;

function WSDL_storeOrderDetailsResponse_setOrderId(value) { this._orderId = value;}

WSDL_storeOrderDetailsResponse.prototype.setOrderId = WSDL_storeOrderDetailsResponse_setOrderId;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}storeOrderDetailsResponse
//
function WSDL_storeOrderDetailsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:orderId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
     xml = xml + '</jns0:orderId>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_storeOrderDetailsResponse.prototype.serialize = WSDL_storeOrderDetailsResponse_serialize;

function WSDL_storeOrderDetailsResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_storeOrderDetailsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setOrderId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCostsResponse
//
function WSDL_calcShipmentCostsResponse () {
    this.typeMarker = 'WSDL_calcShipmentCostsResponse';
    this._shipmentCosts = '';
}

//
// accessor is WSDL_calcShipmentCostsResponse.prototype.getShipmentCosts
// element get for shipmentCosts
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
//
// element set for shipmentCosts
// setter function is is WSDL_calcShipmentCostsResponse.prototype.setShipmentCosts
//
function WSDL_calcShipmentCostsResponse_getShipmentCosts() { return this._shipmentCosts;}

WSDL_calcShipmentCostsResponse.prototype.getShipmentCosts = WSDL_calcShipmentCostsResponse_getShipmentCosts;

function WSDL_calcShipmentCostsResponse_setShipmentCosts(value) { this._shipmentCosts = value;}

WSDL_calcShipmentCostsResponse.prototype.setShipmentCosts = WSDL_calcShipmentCostsResponse_setShipmentCosts;
//
// Serialize {http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCostsResponse
//
function WSDL_calcShipmentCostsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:shipmentCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._shipmentCosts);
     xml = xml + '</jns0:shipmentCosts>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

WSDL_calcShipmentCostsResponse.prototype.serialize = WSDL_calcShipmentCostsResponse_serialize;

function WSDL_calcShipmentCostsResponse_deserialize (cxfjsutils, element) {
    var newobject = new WSDL_calcShipmentCostsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing shipmentCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setShipmentCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for schema: http://group-one
//  file:/mnt/c/Users/steiler/Documents/Repository/BPM_Lab/T1-SOGShop-sync/rev0/ConductOrderArtifacts.wsdl#types1
//
//
// Constructor for XML Schema item {http://group-one}products
//
function group_one_products () {
    this.typeMarker = 'group_one_products';
    this._product = [];
}

//
// accessor is group_one_products.prototype.getProduct
// element get for product
// - element type is {http://group-one}product
// - required element
// - array
//
// element set for product
// setter function is is group_one_products.prototype.setProduct
//
function group_one_products_getProduct() { return this._product;}

group_one_products.prototype.getProduct = group_one_products_getProduct;

function group_one_products_setProduct(value) { this._product = value;}

group_one_products.prototype.setProduct = group_one_products_setProduct;
//
// Serialize {http://group-one}products
//
function group_one_products_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._product != null) {
      for (var ax = 0;ax < this._product.length;ax ++) {
       if (this._product[ax] == null) {
        xml = xml + '<jns1:product/>';
       } else {
        xml = xml + this._product[ax].serialize(cxfjsutils, 'jns1:product', null);
       }
      }
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_products.prototype.serialize = group_one_products_serialize;

function group_one_products_deserialize (cxfjsutils, element) {
    var newobject = new group_one_products();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing product');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://group-one', 'product')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = group_one_product_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://group-one', 'product'));
     newobject.setProduct(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://group-one}paymentDetails
//
function group_one_paymentDetails () {
    this.typeMarker = 'group_one_paymentDetails';
    this._bankName = '';
    this._bankAddress = '';
    this._accountNumber = '';
    this._accountHolderName = '';
}

//
// accessor is group_one_paymentDetails.prototype.getBankName
// element get for bankName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for bankName
// setter function is is group_one_paymentDetails.prototype.setBankName
//
function group_one_paymentDetails_getBankName() { return this._bankName;}

group_one_paymentDetails.prototype.getBankName = group_one_paymentDetails_getBankName;

function group_one_paymentDetails_setBankName(value) { this._bankName = value;}

group_one_paymentDetails.prototype.setBankName = group_one_paymentDetails_setBankName;
//
// accessor is group_one_paymentDetails.prototype.getBankAddress
// element get for bankAddress
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for bankAddress
// setter function is is group_one_paymentDetails.prototype.setBankAddress
//
function group_one_paymentDetails_getBankAddress() { return this._bankAddress;}

group_one_paymentDetails.prototype.getBankAddress = group_one_paymentDetails_getBankAddress;

function group_one_paymentDetails_setBankAddress(value) { this._bankAddress = value;}

group_one_paymentDetails.prototype.setBankAddress = group_one_paymentDetails_setBankAddress;
//
// accessor is group_one_paymentDetails.prototype.getAccountNumber
// element get for accountNumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for accountNumber
// setter function is is group_one_paymentDetails.prototype.setAccountNumber
//
function group_one_paymentDetails_getAccountNumber() { return this._accountNumber;}

group_one_paymentDetails.prototype.getAccountNumber = group_one_paymentDetails_getAccountNumber;

function group_one_paymentDetails_setAccountNumber(value) { this._accountNumber = value;}

group_one_paymentDetails.prototype.setAccountNumber = group_one_paymentDetails_setAccountNumber;
//
// accessor is group_one_paymentDetails.prototype.getAccountHolderName
// element get for accountHolderName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for accountHolderName
// setter function is is group_one_paymentDetails.prototype.setAccountHolderName
//
function group_one_paymentDetails_getAccountHolderName() { return this._accountHolderName;}

group_one_paymentDetails.prototype.getAccountHolderName = group_one_paymentDetails_getAccountHolderName;

function group_one_paymentDetails_setAccountHolderName(value) { this._accountHolderName = value;}

group_one_paymentDetails.prototype.setAccountHolderName = group_one_paymentDetails_setAccountHolderName;
//
// Serialize {http://group-one}paymentDetails
//
function group_one_paymentDetails_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:bankName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._bankName);
     xml = xml + '</jns1:bankName>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:bankAddress>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._bankAddress);
     xml = xml + '</jns1:bankAddress>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:accountNumber>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._accountNumber);
     xml = xml + '</jns1:accountNumber>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:accountHolderName>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._accountHolderName);
     xml = xml + '</jns1:accountHolderName>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_paymentDetails.prototype.serialize = group_one_paymentDetails_serialize;

function group_one_paymentDetails_deserialize (cxfjsutils, element) {
    var newobject = new group_one_paymentDetails();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bankName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBankName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bankAddress');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBankAddress(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accountNumber');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setAccountNumber(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accountHolderName');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setAccountHolderName(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://group-one}order
//
function group_one_order () {
    this.typeMarker = 'group_one_order';
    this._orderId = null;
    this._customerId = '';
    this._products = null;
    this._shippingAddress = '';
    this._paymentDetails = null;
    this._shipmentDate = '';
    this._status = null;
}

//
// accessor is group_one_order.prototype.getOrderId
// element get for orderId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for orderId
// setter function is is group_one_order.prototype.setOrderId
//
function group_one_order_getOrderId() { return this._orderId;}

group_one_order.prototype.getOrderId = group_one_order_getOrderId;

function group_one_order_setOrderId(value) { this._orderId = value;}

group_one_order.prototype.setOrderId = group_one_order_setOrderId;
//
// accessor is group_one_order.prototype.getCustomerId
// element get for customerId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for customerId
// setter function is is group_one_order.prototype.setCustomerId
//
function group_one_order_getCustomerId() { return this._customerId;}

group_one_order.prototype.getCustomerId = group_one_order_getCustomerId;

function group_one_order_setCustomerId(value) { this._customerId = value;}

group_one_order.prototype.setCustomerId = group_one_order_setCustomerId;
//
// accessor is group_one_order.prototype.getProducts
// element get for products
// - element type is {http://group-one}products
// - required element
//
// element set for products
// setter function is is group_one_order.prototype.setProducts
//
function group_one_order_getProducts() { return this._products;}

group_one_order.prototype.getProducts = group_one_order_getProducts;

function group_one_order_setProducts(value) { this._products = value;}

group_one_order.prototype.setProducts = group_one_order_setProducts;
//
// accessor is group_one_order.prototype.getShippingAddress
// element get for shippingAddress
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for shippingAddress
// setter function is is group_one_order.prototype.setShippingAddress
//
function group_one_order_getShippingAddress() { return this._shippingAddress;}

group_one_order.prototype.getShippingAddress = group_one_order_getShippingAddress;

function group_one_order_setShippingAddress(value) { this._shippingAddress = value;}

group_one_order.prototype.setShippingAddress = group_one_order_setShippingAddress;
//
// accessor is group_one_order.prototype.getPaymentDetails
// element get for paymentDetails
// - element type is {http://group-one}paymentDetails
// - required element
//
// element set for paymentDetails
// setter function is is group_one_order.prototype.setPaymentDetails
//
function group_one_order_getPaymentDetails() { return this._paymentDetails;}

group_one_order.prototype.getPaymentDetails = group_one_order_getPaymentDetails;

function group_one_order_setPaymentDetails(value) { this._paymentDetails = value;}

group_one_order.prototype.setPaymentDetails = group_one_order_setPaymentDetails;
//
// accessor is group_one_order.prototype.getShipmentDate
// element get for shipmentDate
// - element type is {http://www.w3.org/2001/XMLSchema}date
// - required element
//
// element set for shipmentDate
// setter function is is group_one_order.prototype.setShipmentDate
//
function group_one_order_getShipmentDate() { return this._shipmentDate;}

group_one_order.prototype.getShipmentDate = group_one_order_getShipmentDate;

function group_one_order_setShipmentDate(value) { this._shipmentDate = value;}

group_one_order.prototype.setShipmentDate = group_one_order_setShipmentDate;
//
// accessor is group_one_order.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is group_one_order.prototype.setStatus
//
function group_one_order_getStatus() { return this._status;}

group_one_order.prototype.getStatus = group_one_order_getStatus;

function group_one_order_setStatus(value) { this._status = value;}

group_one_order.prototype.setStatus = group_one_order_setStatus;
//
// Serialize {http://group-one}order
//
function group_one_order_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._orderId != null) {
      xml = xml + '<jns1:orderId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._orderId);
      xml = xml + '</jns1:orderId>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns1:customerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._customerId);
     xml = xml + '</jns1:customerId>';
    }
    // block for local variables
    {
     xml = xml + this._products.serialize(cxfjsutils, 'jns1:products', null);
    }
    // block for local variables
    {
     xml = xml + '<jns1:shippingAddress>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._shippingAddress);
     xml = xml + '</jns1:shippingAddress>';
    }
    // block for local variables
    {
     xml = xml + this._paymentDetails.serialize(cxfjsutils, 'jns1:paymentDetails', null);
    }
    // block for local variables
    {
     xml = xml + '<jns1:shipmentDate>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._shipmentDate);
     xml = xml + '</jns1:shipmentDate>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_order.prototype.serialize = group_one_order_serialize;

function group_one_order_deserialize (cxfjsutils, element) {
    var newobject = new group_one_order();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing orderId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://group-one', 'orderId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setOrderId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing customerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setCustomerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing products');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = group_one_products_deserialize(cxfjsutils, curElement);
    }
    newobject.setProducts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing shippingAddress');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setShippingAddress(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing paymentDetails');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = group_one_paymentDetails_deserialize(cxfjsutils, curElement);
    }
    newobject.setPaymentDetails(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing shipmentDate');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setShipmentDate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://group-one', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://group-one}product
//
function group_one_product () {
    this.typeMarker = 'group_one_product';
    this._productId = '';
    this._numberOfItems = 0;
}

//
// accessor is group_one_product.prototype.getProductId
// element get for productId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for productId
// setter function is is group_one_product.prototype.setProductId
//
function group_one_product_getProductId() { return this._productId;}

group_one_product.prototype.getProductId = group_one_product_getProductId;

function group_one_product_setProductId(value) { this._productId = value;}

group_one_product.prototype.setProductId = group_one_product_setProductId;
//
// accessor is group_one_product.prototype.getNumberOfItems
// element get for numberOfItems
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for numberOfItems
// setter function is is group_one_product.prototype.setNumberOfItems
//
function group_one_product_getNumberOfItems() { return this._numberOfItems;}

group_one_product.prototype.getNumberOfItems = group_one_product_getNumberOfItems;

function group_one_product_setNumberOfItems(value) { this._numberOfItems = value;}

group_one_product.prototype.setNumberOfItems = group_one_product_setNumberOfItems;
//
// Serialize {http://group-one}product
//
function group_one_product_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:productId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._productId);
     xml = xml + '</jns1:productId>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:numberOfItems>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._numberOfItems);
     xml = xml + '</jns1:numberOfItems>';
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_product.prototype.serialize = group_one_product_serialize;

function group_one_product_deserialize (cxfjsutils, element) {
    var newobject = new group_one_product();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing productId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setProductId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing numberOfItems');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setNumberOfItems(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://group-one}ConductOrderResponse
//
function group_one_ConductOrderResponse () {
    this.typeMarker = 'group_one_ConductOrderResponse';
    this._result = '';
    this._order = null;
}

//
// accessor is group_one_ConductOrderResponse.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for result
// setter function is is group_one_ConductOrderResponse.prototype.setResult
//
function group_one_ConductOrderResponse_getResult() { return this._result;}

group_one_ConductOrderResponse.prototype.getResult = group_one_ConductOrderResponse_getResult;

function group_one_ConductOrderResponse_setResult(value) { this._result = value;}

group_one_ConductOrderResponse.prototype.setResult = group_one_ConductOrderResponse_setResult;
//
// accessor is group_one_ConductOrderResponse.prototype.getOrder
// element get for order
// - element type is {http://group-one}order
// - required element
//
// element set for order
// setter function is is group_one_ConductOrderResponse.prototype.setOrder
//
function group_one_ConductOrderResponse_getOrder() { return this._order;}

group_one_ConductOrderResponse.prototype.getOrder = group_one_ConductOrderResponse_getOrder;

function group_one_ConductOrderResponse_setOrder(value) { this._order = value;}

group_one_ConductOrderResponse.prototype.setOrder = group_one_ConductOrderResponse_setOrder;
//
// Serialize {http://group-one}ConductOrderResponse
//
function group_one_ConductOrderResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns1:result>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._result);
     xml = xml + '</jns1:result>';
    }
    // block for local variables
    {
     xml = xml + this._order.serialize(cxfjsutils, 'jns1:order', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_ConductOrderResponse.prototype.serialize = group_one_ConductOrderResponse_serialize;

function group_one_ConductOrderResponse_deserialize (cxfjsutils, element) {
    var newobject = new group_one_ConductOrderResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setResult(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing order');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = group_one_order_deserialize(cxfjsutils, curElement);
    }
    newobject.setOrder(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://group-one}ConductOrderRequest
//
function group_one_ConductOrderRequest () {
    this.typeMarker = 'group_one_ConductOrderRequest';
    this._input = null;
}

//
// accessor is group_one_ConductOrderRequest.prototype.getInput
// element get for input
// - element type is {http://group-one}order
// - required element
//
// element set for input
// setter function is is group_one_ConductOrderRequest.prototype.setInput
//
function group_one_ConductOrderRequest_getInput() { return this._input;}

group_one_ConductOrderRequest.prototype.getInput = group_one_ConductOrderRequest_getInput;

function group_one_ConductOrderRequest_setInput(value) { this._input = value;}

group_one_ConductOrderRequest.prototype.setInput = group_one_ConductOrderRequest_setInput;
//
// Serialize {http://group-one}ConductOrderRequest
//
function group_one_ConductOrderRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName !== null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://iaas.uni-stuttgart.de/labs/FlowSOG\' xmlns:jns1=\'http://group-one\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + this._input.serialize(cxfjsutils, 'jns1:input', null);
    }
    if (elementName !== null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

group_one_ConductOrderRequest.prototype.serialize = group_one_ConductOrderRequest_serialize;

function group_one_ConductOrderRequest_deserialize (cxfjsutils, element) {
    var newobject = new group_one_ConductOrderRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing input');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = group_one_order_deserialize(cxfjsutils, curElement);
    }
    newobject.setInput(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {http://group-one}ConductOrderService
//

// Javascript for {http://group-one}ConductOrder

function group_one_ConductOrder () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCosts'] = WSDL_calcTransactionCosts_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCosts'] = WSDL_calcTransactionCosts_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}cancelOrder'] = WSDL_cancelOrder_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}cancelOrder'] = WSDL_cancelOrder_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}conductPayment'] = WSDL_conductPayment_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}conductPayment'] = WSDL_conductPayment_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}listProductsResponse'] = WSDL_listProductsResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}listProductsResponse'] = WSDL_listProductsResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCosts'] = WSDL_calcShipmentCosts_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCosts'] = WSDL_calcShipmentCosts_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}shipProducts'] = WSDL_shipProducts_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}shipProducts'] = WSDL_shipProducts_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCostsResponse'] = WSDL_calcOrderCostsResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCostsResponse'] = WSDL_calcOrderCostsResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailability'] = WSDL_checkAvailability_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailability'] = WSDL_checkAvailability_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}onFinishCheckAvailability'] = WSDL_onFinishCheckAvailability_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}onFinishCheckAvailability'] = WSDL_onFinishCheckAvailability_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCostsResponse'] = WSDL_calcTransactionCostsResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcTransactionCostsResponse'] = WSDL_calcTransactionCostsResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityResponse'] = WSDL_checkAvailabilityResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityResponse'] = WSDL_checkAvailabilityResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCosts'] = WSDL_calcOrderCosts_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcOrderCosts'] = WSDL_calcOrderCosts_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityAsync'] = WSDL_checkAvailabilityAsync_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}checkAvailabilityAsync'] = WSDL_checkAvailabilityAsync_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}getOrderDetails'] = WSDL_getOrderDetails_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}getOrderDetails'] = WSDL_getOrderDetails_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}listProducts'] = WSDL_listProducts_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}listProducts'] = WSDL_listProducts_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}storeOrderDetailsResponse'] = WSDL_storeOrderDetailsResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}storeOrderDetailsResponse'] = WSDL_storeOrderDetailsResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCostsResponse'] = WSDL_calcShipmentCostsResponse_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}calcShipmentCostsResponse'] = WSDL_calcShipmentCostsResponse_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}productList'] = WSDL_productList_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}productList'] = WSDL_productList_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}order'] = WSDL_order_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}productStatus'] = WSDL_productStatus_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}productStatus'] = WSDL_productStatus_deserialize;
    this.globalElementSerializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}product'] = WSDL_product_serialize;
    this.globalElementDeserializers['{http://iaas.uni-stuttgart.de/labs/FlowSOG}product'] = WSDL_product_deserialize;
    this.globalElementSerializers['{http://group-one}ConductOrderResponse'] = group_one_ConductOrderResponse_serialize;
    this.globalElementDeserializers['{http://group-one}ConductOrderResponse'] = group_one_ConductOrderResponse_deserialize;
    this.globalElementSerializers['{http://group-one}ConductOrderRequest'] = group_one_ConductOrderRequest_serialize;
    this.globalElementDeserializers['{http://group-one}ConductOrderRequest'] = group_one_ConductOrderRequest_deserialize;
    this.globalElementSerializers['{http://group-one}products'] = group_one_products_serialize;
    this.globalElementDeserializers['{http://group-one}products'] = group_one_products_deserialize;
    this.globalElementSerializers['{http://group-one}paymentDetails'] = group_one_paymentDetails_serialize;
    this.globalElementDeserializers['{http://group-one}paymentDetails'] = group_one_paymentDetails_deserialize;
    this.globalElementSerializers['{http://group-one}order'] = group_one_order_serialize;
    this.globalElementDeserializers['{http://group-one}order'] = group_one_order_deserialize;
    this.globalElementSerializers['{http://group-one}product'] = group_one_product_serialize;
    this.globalElementDeserializers['{http://group-one}product'] = group_one_product_deserialize;
}

function group_one_process_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling group_one_ConductOrderResponseMessage_deserializeResponse');
     responseObject = group_one_ConductOrderResponseMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

group_one_ConductOrder.prototype.process_onsuccess = group_one_process_op_onsuccess;

function group_one_process_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

group_one_ConductOrder.prototype.process_onerror = group_one_process_op_onerror;

//
// Operation {http://group-one}process
// - bare operation. Parameters:
// - group_one_ConductOrderRequest
//
function group_one_process_op(successCallback, errorCallback, ConductOrderRequest) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ConductOrderRequest;
    xml = this.ConductOrderRequestMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.process_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.process_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://group-one/process';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

group_one_ConductOrder.prototype.process = group_one_process_op;

function group_one_ConductOrderRequestMessage_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://iaas.uni-stuttgart.de/labs/FlowSOG' xmlns:jns1='http://group-one' ");
    // block for local variables
    {
     xml = xml + args[0].serialize(cxfjsutils, 'jns1:ConductOrderRequest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

group_one_ConductOrder.prototype.ConductOrderRequestMessage_serializeInput = group_one_ConductOrderRequestMessage_serializeInput;

function group_one_ConductOrderResponseMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = group_one_ConductOrderResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function group_one_ConductOrder_group_one_ConductOrderPort () {
  this.url = 'http://localhost:8080/ode/processes/ConductOrder';
}
group_one_ConductOrder_group_one_ConductOrderPort.prototype = new group_one_ConductOrder;
