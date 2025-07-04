// hooks/useViaCep.ts
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export function useViaCep() {
  const { setValue } = useFormContext();
  const zip = useWatch({ name: "zipCode" });

  useEffect(() => {
    const fetchAddress = async () => {
      if (!zip || zip.length !== 8) return;

      try {
        const res = await fetch(`https://viacep.com.br/ws/${zip}/json/`);
        const data = await res.json();

        if (data.erro) throw new Error("CEP inválido");

        setValue("country", "Brasil");
        setValue("street", data.logradouro);
        setValue("town", data.localidade);
        setValue("province", data.uf);
      } catch (err) {
        console.error("Erro ao buscar CEP:", err);
      }
    };

    fetchAddress();
  }, [zip, setValue]);
}
