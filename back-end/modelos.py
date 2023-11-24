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
    __distancia = db.Column(db.String(2), name = "Distancia")

    def __init__(self, nombre, apellido, edad, genero, nacionalidad, tipoDocumento, numeroDocumento, telefono, 
                 coberturaMedica, nombreContacto, telefonoContacto, distancia):
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
        self.__distancia = distancia

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
    def distancia(self):
        return self.__distancia

    @distancia.setter
    def distancia(self, distancia):
        self.__distancia = distancia

with app.app_context():
    db.create_all()