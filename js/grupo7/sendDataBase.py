##########################################################################
############# Script para el envio de datos a FireBase ####################
##########################################################################

# Import database module.
from firebase_admin import db
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime
fecha = datetime.today().strftime('%Y-%m-%d')
hora = datetime.today().strftime('%H:%M:%S')
# Fetch the service account key JSON file contents
cred = credentials.Certificate({
  "type": "service_account",
  "project_id": "arquitectura-grupo-7",
  "private_key_id": "7232b14045a7b96bb18e535702c9889f5f1e0a96",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDE1Hb8F2sGO/jZ\nLnkTKBaFe257eWkzNoUfqpPgyhEeSKVvWqIBqSXUgJf7Z/HTGLPsXRRqFQSKRQSn\numIQCcbyrnWJkjAToVqIo7xsm3w6DkCMPF2YwFHyVgRsTBVghHf8XkD8kesAbl4J\nMvsT4wyomWFtElBDJyWPZsB7mZugU4orhm5yt1DBmN7Mp5UtOSxd5JFPos/6TFAx\n414GdpfoLXo2IS1hg6p4GIugD8ajrXa/aWty1aFNuX7Nja2dxpRZOGQw8CwVYuWJ\nvTr075gFdWqRpEUSZQ6dCXeWhyE721XZ9qJlkl4DWOhX0J2NaYn67Y7ijX/Uop5S\nf3xwSPi7AgMBAAECggEAAO5EqvfmlI6qpEaqroACINrbqi+bSaSbp/HHDDxexo1i\nY661u5tHDgR9QErJo0CawGatee9XTtrfsdyMQ4/ARi9Nmy5uFfgT22rzl6UU+jNN\nQKLo1sssazoKTR0ylq4merK5ZouMGG7tK+iQgZOq+ifrhLgEjPGKi6CMdXX2/SDJ\nE+VbyeOuNAG4bJqSufP061WSeCJTjfIVxwpYILj13Qh66fF5/gxPlMmRXw/z7eah\nXfQcke6EVCSbaT0EOacDLxMfYl/CcAhCjnVs+Uw1LWXifIEzduoiTFGS5TUSeRSB\nuSgyCK8lstUTjnRfD4RTw63zfBt+PZ2oZNysSgmBIQKBgQDhr/KP9mnDh1QrFZdm\nS5OGOJqZjnfsq1H4M/mL33jlwmS+1V5UIFR12Itt5UlpOsuajM3h+amGjZuMhUof\nIXi4XR/ZE9srU4sgP8AB82taY4j4/tRbLrqVjgc/rOaSKq6n4zRQ/SERltdQKdCX\noqsM11QHVSfBBWyzyMUNFMwcmwKBgQDfREiLQqsm40Nv9QVWLlISyB1whXIv/b4F\ncjTaxVvhPTVngyI7CpQLfHw3OvYeayVgdxtPnMlr52iUJ7GenqM+yy/fYDShw/4c\nGAbHPINvcKNuhpjB5P0m/HH5eiJZ6Ez56PK7vYsrO4pxVCRGcWdvqyU/eG71KFha\n8z66xPuGYQKBgFxQcwBuA68GEOiaqVYffdV+G8bJ3sYBAcNrxxxuqW4ZyMnCTxZM\nLyARFl86VX/km9m41JIlZDF0hPbCoqH/N/j5pohNte2P+62SRgDGR9guNJ3c5pHx\nmEKKWO6z05BgQxbLOeAS2k7ui13v7LHJyPu0rFtfeqZaiK81ZVzHcAIXAoGBAIml\nO2Q/0ezDp8vaL1QWcpsJrLy2SNO1h/Url9JYYnDWn5oVioED4InEUYBrZVkTjZOP\nWtMWQke3/w13+1VjUBligz0fvtMMVhlT5rnmYNHPi7KUYJEJb9kdQdcgqRTs1qgs\nKZn9HVOl/ZAo48RaHf8GcIxU33NdUDuiQ0Y6MyeBAoGANGrP9l7UdlThXWRLBmhv\nMjYVTdAbIEDSk+E3wgsjIQY2j/UEpfZLn1CR7W1JBFPa6LyPbbgJeE3cfae4kNO1\n1PAIyKwYSJoh3ouSEHLNaUOk3SwA1qTWSXj9BbqinixWrc7l624wz5B9V8YQz1t0\n0RWZTBpjWHJcvQUv0g/TdIE=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-uk5ey@arquitectura-grupo-7.iam.gserviceaccount.com",
  "client_id": "101391107880287086205",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uk5ey%40arquitectura-grupo-7.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
})
# Initialize the app with a None auth variable, limiting the server's access
firebase_admin.initialize_app(cred, {'databaseURL': 'https://arquitectura-grupo-7-default-rtdb.firebaseio.com/'})

def sendDataFireBase(ps, pd, disk_percent, received_bytes):
    try:
        ref = db.reference('')
        posts_ref = ref.child('presiones')
        new_post_ref = posts_ref.push()
        new_post_ref.set({
            'fecha': fecha,
            'hora': hora,
            'presionSistolica': ps,
            'presionDiastocia': pd,
            'disk_percent': disk_percent,
            'received_bytes': received_bytes
        })
        print("Registro guardado")
    except Exception as e:
        print(e)
        
#sendDataFireBase()
sendDataFireBase(200, 200)