import Head from "next/head";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { verifica } from "../services/user";
import { BiUserCircle } from "react-icons/Bi";
import { FaTractor } from "react-icons/Fa";

export default function Home() {
  return (
    <div>
      <div>
        <h1 class="title">Visão Geral</h1>
      </div>
      <div className="full">
        <div className="perfil">
          <div class="quadro">
            <div class="um"></div>
            <div class="dois">
              <icon class="icon_name">
                <BiUserCircle />
              </icon>
            </div>
            <div class="tres"></div>
          </div>
          <h2 class="person">Douglas Junior</h2>
        </div>
        <div class="icon_veiculo">
          <FaTractor />
        </div>
        <div class="resto">CARRO</div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token Invalido");

    verifica(token);
    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
