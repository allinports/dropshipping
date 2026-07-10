export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#170d08] text-milk-100/40 text-center py-6 px-6 text-xs border-t border-milk-100/5">
      <div className="mx-auto max-w-4xl space-y-2">
        <p className="font-medium tracking-wide">
          Compra 100% segura • Seus dados estão protegidos por criptografia • Atendimento dedicado ao cliente
        </p>
        <p className="text-[11px] opacity-70">
          © {currentYear} Mixer Elétrico Portátil. Todos os direitos reservados. Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
}
