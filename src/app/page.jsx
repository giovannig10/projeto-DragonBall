"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dragonball-api.com/api/characters?limit=58");
      const data = response.data.items
      setUsuarios(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8">Esferas do Dragão</h1>

        <div className="text-center mb-8">
                    <div className="mb-6">
          <button 
            onClick={buscarUsuarios} 
            disabled={loading} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? "Carregando..." : "Buscar Personagens"} 
          </button>
          </div>
                </div>
            </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usuarios && usuarios.length > 0 ? usuarios.map((usuario) => (
            <div key={usuario.id} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={usuario.image} width={500} height={500}></Image>
              <h3 className="text-gray-600">{usuario.name}</h3>
              <p className="text-gray-600">{usuario.race}</p>
              <p className="text-gray-600">{usuario.gender}</p>
              <p className="text-gray-600">{usuario.ki}</p>
              <p className="text-gray-600">{usuario.maxKi}</p>
              <p className="text-gray-600">{usuario.description}</p>
              <p className="text-gray-600">{usuario.affiliation}</p>
              <p className="text-gray-600">{usuario.deletedAt}</p>
              </div>
          )) : (
            <p className="text-center text-gray-500 col-span-full">
              {loading ? "Carregando..." : "Nenhum personagem encontrado"}
            </p>
          )}
          </div>
      </div>
  );
}
