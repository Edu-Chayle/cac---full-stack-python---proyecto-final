from app import app, db

class Inscripto(db.Model):
    __nombre = db.Column(db.String(50), name = "Nombre")
    __apellido = db.Column(db.String(50), name = "Apellido")
    __edad = db.Column(db.String(2), name = "Edad")
    __genero = db.Column(db.String(9), name = "Género")
    __nacionalidad = db.Column(db.String(32), name = "Nacionalidad")
    __tipoDocumento = db.Column(db.String(3), name = "Tipo documento")
    __numeroDocumento = db.Column(db.String(20), primary_key = True, name = "Número documento")
    __telefono = db.Column(db.String(14), name = "Teléfono")
    __coberturaMedica = db.Column(db.String(50), name = "Cobertura médica")
    __nombreContacto = db.Column(db.String(50), name = "Nombre contacto")
    __telefonoContacto = db.Column(db.String(14), name = "Teléfono contacto")
    __circuito = db.Column(db.String(2), name = "Circuito")

    def __init__(self, nombre, apellido, edad, genero, nacionalidad, tipoDocumento, numeroDocumento, telefono, 
                 coberturaMedica, nombreContacto, telefonoContacto, circuito):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__edad = edad
        self.__genero = genero
        self.__nacionalidad = nacionalidad
        self.__tipoDocumento = tipoDocumento
        self.__numeroDocumento = numeroDocumento
        self.__telefono = telefono
        self.__coberturaMedica = coberturaMedica
        self.__nombreContacto = nombreContacto
        self.__telefonoContacto = telefonoContacto
        self.__circuito = circuito

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def apellido(self):
        return self.__apellido

    @apellido.setter
    def apellido(self, apellido):
        self.__apellido = apellido

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, edad):
        self.__edad = edad

    @property
    def genero(self):
        return self.__genero

    @genero.setter
    def genero(self, genero):
        self.__genero = genero

    @property
    def nacionalidad(self):
        return self.__nacionalidad

    @nacionalidad.setter
    def nacionalidad(self, nacionalidad):
        self.__nacionalidad = nacionalidad

    @property
    def tipoDocumento(self):
        return self.__tipoDocumento

    @tipoDocumento.setter
    def tipoDocumento(self, tipoDocumento):
        self.__tipoDocumento = tipoDocumento

    @property
    def numeroDocumento(self):
        return self.__numeroDocumento

    @numeroDocumento.setter
    def numeroDocumento(self, numeroDocumento):
        self.__numeroDocumento = numeroDocumento

    @property
    def telefono(self):
        return self.__telefono

    @telefono.setter
    def telefono(self, telefono):
        self.__telefono = telefono

    @property
    def coberturaMedica(self):
        return self.__coberturaMedica

    @coberturaMedica.setter
    def coberturaMedica(self, coberturaMedica):
        self.__coberturaMedica = coberturaMedica

    @property
    def nombreContacto(self):
        return self.__nombreContacto

    @nombreContacto.setter
    def nombreContacto(self, nombreContacto):
        self.__nombreContacto = nombreContacto

    @property
    def telefonoContacto(self):
        return self.__telefonoContacto

    @telefonoContacto.setter
    def telefonoContacto(self, telefonoContacto):
        self.__telefonoContacto = telefonoContacto

    @property
    def circuito(self):
        return self.__circuito

    @circuito.setter
    def circuito(self, circuito):
        self.__circuito = circuito

    class Kit(db.Model):
        __codigo = db.Column(db.String(4),primary_key = True,name = "Codigo")
        __genero = db.Column(db.String(9), name = "Genero")
        __talle = db.Column(db.String(4), name = "Talle")
        __costo = db.Column(db.Integer,name = "Costo")
        __stock = db.Column(db.Integer,name = "Stock")

def __init__(self,codigo,genero,talle,costo,stock):
        self.__codigo = codigo
        self.__genero = genero
        self.__talle = talle
        self.__costo = costo
        self.__stock = stock
    
    @property
    def codigo(self):
        return self.__codigo
    
    @codigo.setter
    def codigo(self,codigo):
        self.__codigo = codigo
    
    @property
    def genero(self):
        return self.__genero
    
    @genero.setter
    def genero(self,genero):
        self.__genero = genero
    
    @property
    def talle(self):
        return self.__talle
    
    @talle.setter
    def talle(self,talle):
        self.__talle = talle
    
    @property
    def costo(self):
        return self.__costo
    
    @costo.setter
    def costo(self,costo):
        self.__costo = costo
    
    @property
    def stock(self):
        return self.__stock
    
    @stock.setter
    def stock(self,stock):
        self.__stock = stock
        
with app.app_context():
    db.create_all()
