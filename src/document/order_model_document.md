### 订单数据库设计;

### user_id:

**用户 ID,数字,数据类型:INTEGER 不能为空;**

### address_id:

**地址ID,数字,数据类型:INTEGER,不能为空;**

### goods_info:

**订单商品信息,数据类型:TEXT,不能为空;**

### total:

**订单总金额,数据类型:DECIMAL(10,2)不能为空;**

### order_number:

**订单唯一标识,数据类型:CHAR不能为空;**

### status:

**订单状态,数据类型:INTEGER 不能为空,0:未支付,1:已支付,2:已发货,3:已签收,4:取消;**

