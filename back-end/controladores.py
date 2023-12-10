from flask import Flask, jsonify, request
from app import app, ma
from modelos import *

class InscriptoSchema(ma.Schema):
    class Meta:
        fields = ("nombre", "apellido", "edad", "genero", "nacionalidad", "tipoDocumento", "numeroDocumento", 
                  "telefono", "coberturaMedica", "nombreContacto", "telefonoContacto", "circuito")

inscriptoSchema = InscriptoSchema()
inscriptosSchema = InscriptoSchema(many = True)

@app.route("/inscriptos", methods=["GET"])
def get_inscriptos():
    allInscriptos = Inscripto.query.all()
    result = inscriptosSchema.dump(allInscriptos)

    return jsonify(result)

@app.route("/inscriptos/<numeroDocumento>", methods=["GET"])
def get_inscripto(numeroDocumento):
    inscriptoEncontrado = Inscripto.query.get(numeroDocumento)

    if inscriptoEncontrado:
        return inscriptoSchema.jsonify(inscriptoEncontrado)
    else:
        return jsonify({"message": "No se encontró ningún inscripto con ese número de documento."}), 404

@app.route("/inscriptos/<numeroDocumento>", methods=["DELETE"])
def delete_inscripto(numeroDocumento):
    inscriptoEncontrado = Inscripto.query.get(numeroDocumento)

    if not inscriptoEncontrado:
        return jsonify({"message": "No se encontró ningún inscripto con ese número de documento."}), 404

    db.session.delete(inscriptoEncontrado)
    db.session.commit()

    return inscriptoSchema.jsonify(inscriptoEncontrado)

@app.route("/inscriptos", methods=["POST"])
def create_inscripto():
    inscriptoEncontrado = Inscripto.query.get(request.json["numeroDocumento"])

    if inscriptoEncontrado:
        return jsonify({"message": "No se pudo guardar el inscripto porque ya existe."}), 409

    nombre = request.json["nombre"]
    apellido = request.json["apellido"]
    edad = request.json["edad"]
    genero = request.json["genero"]
    nacionalidad = request.json["nacionalidad"]
    tipoDocumento = request.json["tipoDocumento"]
    numeroDocumento = request.json["numeroDocumento"]
    telefono = request.json["telefono"]
    coberturaMedica = request.json["coberturaMedica"]
    nombreContacto = request.json["nombreContacto"]
    telefonoContacto = request.json["telefonoContacto"]
    circuito = request.json["circuito"]
    newInscripto = Inscripto(nombre, apellido, edad, genero, nacionalidad, tipoDocumento, numeroDocumento, 
                             telefono, coberturaMedica, nombreContacto, telefonoContacto, circuito)

    db.session.add(newInscripto)
    db.session.commit()

    return inscriptoSchema.jsonify(newInscripto)

@app.route("/inscriptos/<numeroDocumento>", methods=["PUT"])
def update_inscripto(numeroDocumento):
    inscriptoEncontrado = Inscripto.query.get(numeroDocumento)

    if not inscriptoEncontrado:
        return jsonify({"message": "No se encontró ningún inscripto con ese número de documento."}), 404

    inscriptoEncontrado.nombre = request.json["nombre"]
    inscriptoEncontrado.apellido = request.json["apellido"]
    inscriptoEncontrado.edad = request.json["edad"]
    inscriptoEncontrado.genero = request.json["genero"]
    inscriptoEncontrado.nacionalidad = request.json["nacionalidad"]
    inscriptoEncontrado.tipoDocumento = request.json["tipoDocumento"]
    inscriptoEncontrado.numeroDocumento = request.json["numeroDocumento"]
    inscriptoEncontrado.telefono = request.json["telefono"]
    inscriptoEncontrado.coberturaMedica = request.json["coberturaMedica"]
    inscriptoEncontrado.nombreContacto = request.json["nombreContacto"]
    inscriptoEncontrado.telefonoContacto = request.json["telefonoContacto"]
    inscriptoEncontrado.circuito = request.json["circuito"]

    db.session.commit()

    return inscriptoSchema.jsonify(inscriptoEncontrado)

## Clase Kits ##

class KitSchema(ma.Schema):
    class Meta:
        fields = ("codigo", "genero", "talle", "costo", "stock")
    
kitSchema = KitSchema()
KitsSchema = KitSchema(many = True)

@app.route("/kits",methods = ['GET'])
def get_kits():
    allKits = Kit.query.all()
    result = KitsSchema.dump(allKits)
    if not result:
        return jsonify({"message": "No se encontró ningún kit"}), 404
    else:
        return jsonify(result)

@app.route("/kits/<codigo>",methods=['GET'])
def get_kit(codigo):
    kitEncontrado = Kit.query.get(codigo)

    if kitEncontrado:
        return kitSchema.jsonify(kitEncontrado)
    else:
        return jsonify({"message": "No se encuentra"}),404

@app.route("/kits/<codigo>",methods =['DELETE'])
def delete_kit(codigo):
    kitEncontrado = Kit.query.get(codigo)

    if not kitEncontrado:
        return jsonify({"message": "No se encontró"}), 404
    
    db.session.delete(kitEncontrado)
    db.session.commit()

    return kitSchema.jsonify(kitEncontrado)

@app.route("/kits", methods=["POST"])
def create_kit():  
    codigo = request.json["codigo"]
    genero = request.json["genero"]
    talle = request.json["talle"]
    costo = request.json["costo"]
    stock = request.json["stock"]

   

    newKit = Kit(codigo,genero,talle,costo,stock)
    
    db.session.add(newKit)
    db.session.commit()

    
    return kitSchema.jsonify(newKit)

@app.route("/kits/<codigo>",methods=['PUT'])
def update_kit(codigo):
    kitEncontrado = Kit.query.get(codigo)

    if not kitEncontrado:
        return jsonify({"message": "No se encontró"}), 404
    
    kitEncontrado.codigo = request.json['codigo']
    kitEncontrado.genero = request.json['genero']
    kitEncontrado.talle = request.json['talle']
    kitEncontrado.costo = request.json['costo']
    kitEncontrado.stock = request.json['stock']

    db.session.commit()

    return kitSchema.jsonify(kitEncontrado)
