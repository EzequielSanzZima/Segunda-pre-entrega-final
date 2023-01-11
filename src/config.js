export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyecto-backend-726d7",
        "private_key_id": "d9d85f6004c467101527e7cba1fea2e9c678ed09",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrJJtPhexyS6XS\nSELtsxc56j/pgdsnRzPP8d7fch2KWIkzmhbghrLwMH2q0nraO+Nn9GIfJaDg5qml\nMOdFbgK6kfIh3BQVGFdRjWK3TxRoiKs2AawZKC3GuBBFX5MI93r2SiJ37HyCbpLT\nYJnbwpSkVsJ/J0PUIzHTDJIoJc7NzyRLc7sXUK5JDRfLme1yGVzXQSLliRz2oSti\nRP+pxsvVhalQCjx+8HAwMu49vVQoufEc26Etc7CkQN/3x6Wgsy6Lz6DXxrYKpxXu\nM6iYsauw/iIZ7S4rXRfsmrLD4cKEc7HNos+qI9GrpooLfgpFHFAGxy2XWbRzR9of\nRu92WaYjAgMBAAECggEAGGNICoYAEq16/MM1XmAF8EfUQbcyfp9j378MznSZhwxk\nyMitd+NZ/mY6kiwaO50LI9YsYVngWgwkopicbEVn+CQyB+cvqW3li4aFSa/oLZlE\nJJcKai9Sjp3OG8Sp1D5H9G7OCJ7Xg1K0c5CxfCJ3Qg/m+W2j+cfmIrgI39W7aZJe\nZpN3mVowdnMpVC+sRr0mcCX48YvaOIVtqLxLYF1SYJCUjMJjHaCVVu1Y8ZURxFRt\nNYSVCyqk0ShoxG1Wa4LFgzImhQwPIBP57D4uITo/yXCQasrFTgyGBtVKdph9AP/H\nIxR9Lnl72dSS6S3L28JsQB5+282di5z5XgLEbdAh2QKBgQDSqStGyidcDuduMALa\nDQ9OZ2IJS1lPP6fsXXnGdpxHhvaxOf11nxinobLsU8o/ac4IuColkizM3njvOFsU\ngGim974HFjrzrDEsVoejOgb1gH6MrOHEw6+ECNG+wycNDIsssoTZkI0XmkkEfat2\nS6aaWKCwDR5ol2v5oBVykYUZPQKBgQDP+h1NmciW7msTWnycTlScq1gX/4jC/Ib9\nAZ2GUagLCiOz/E/UcWGOgvfbIL7hEDhRRdxP8jxyPOEwWRCorVkAoV9uTX7Q68Qs\naq+oE2kkVs+FU0y0TKCOEZTjxzFp2lm6O/B6TwYXsshTXpmPaKmLnZK2mnlR6Ryt\n5RRrTpHy3wKBgQCCu2dW/BdnAvzOnc73QQmRr4jgmbkn/Coa/nuXFX6wyOoJXCKW\nPxCO30NpdCpcJi4trRTC0i8pSJsmYgPr+jB4BeERBtO46tBtYpm0S0uMSZy/cn59\nnK8sskhwKS3v5Cvupi7Z0eItlprfxZmFxTb0LDI0bz/Cys3AUX9d5T8DRQKBgQCp\n7kb7HOgUyoGaspiWbjocOLQmB5iLGSKCn0tCcH3JZ2N8sG/ZuTpo4wH5fWv5IPOj\nFF3KxLY28R9eDafa6qiKJ1B+I7u2oK0NTa5wuktycavl2AYYW3PkIOFyq1Lolowx\n6r+2b9Mekem0lNsLngzKEtnJcbYnAz13qHFirDP8KQKBgHWqZ+ileuTezhXLmXb7\nLngNLGZcp6NnydgeDmcmIE1+BtMIgGPIG/t04a7vm7savp1awV2Lv3BtqYh3TLbl\ncjBCkP8bXCDL0BP5Bkf3pKf7uTdS6pZDT2Mv1ptd0Ivnvg6esWoDfmTkP2q+2Ddr\nHDjjY5JYnG+OOHeYaFVH5inm\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hgszh@proyecto-backend-726d7.iam.gserviceaccount.com",
        "client_id": "110222247436761664673",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hgszh%40proyecto-backend-726d7.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'sys'
        }
    }
}
