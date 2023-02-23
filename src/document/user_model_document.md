### 用户数据库设计;

### user_name:

**用户账号,纯数字,数据类型:BIGINT,唯一的,不能为空;**

### user_pwd:

**用户密码,字符串,数据类型:STRING,最多20位,非唯一的,不能为空;**

### user_title:

**用户网名,字符串,数据类型:STRING,最多8位,非唯一的,不能为空;**

### user_portrait:

**用户头像,字符串,数据类型:STRING,非唯一的,不能为空,有默认值,默认为ly_123456789;**

### user_shop:

**用户店铺,纯数字,数据类型:BIGINT,唯一的,不能为空,有默认值,默认为0**

### is_admin:

**是否为管理员,纯数字,数据类型:BIGINT,非唯一的,不能为空,有默认值,默认为0**

### 
