import { createFileRoute } from "@tanstack/react-router";
import { Check, Download, Heart, Scissors, ShieldCheck, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/image.png.asset.json";
import mockupOferta from "@/assets/image-6.png.asset.json";
import mockupDicas from "@/assets/image-2.png.asset.json";
import mockupCurso from "@/assets/image-3.png.asset.json";
import mockupExtras from "@/assets/image-4.png.asset.json";
import mockupBebe from "@/assets/image-5.png.asset.json";
import printSueli from "@/assets/image-7.png.asset.json";
import printSilvia from "@/assets/image-8.png.asset.json";
import printKatia from "@/assets/image-9.png.asset.json";
import fotoMaria from "@/assets/image-10.png.asset.json";
import fotoJoana from "@/assets/image-11.png.asset.json";
import fotoRosa from "@/assets/image-12.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+1000 Moldes de Costura em PDF | Acesso Imediato" },
      {
        name: "description",
        content:
          "Mais de 1000 moldes em PDF para bebê, pet, adulto e acessórios, com curso de costura e guia de dicas. Baixe na hora e comece a costurar hoje.",
      },
      { property: "og:title", content: "+1000 Moldes de Costura em PDF" },
      {
        property: "og:description",
        content:
          "Moldes prontos para imprimir, cortar e costurar. Curso de costura, dicas e bônus inclusos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/37hokh9_1046547";

const beneficios = [
  {
    icon: Download,
    title: "Acesso imediato",
    text: "Assim que o pagamento é aprovado, os arquivos chegam no seu e-mail.",
  },
  {
    icon: Scissors,
    title: "Moldes reais em PDF",
    text: "Imprima em folha A4, recorte e comece a costurar no mesmo dia.",
  },
  {
    icon: Heart,
    title: "Do bebê ao pet",
    text: "Bodies, macacões, vestidos, roupinhas pet, acessórios e muito mais.",
  },
  {
    icon: Zap,
    title: "Para iniciantes",
    text: "Passo a passo simples, com medidas e indicação de corte no tecido.",
  },
];

const itens = [
  {
    img: mockupBebe,
    tag: "Principal",
    title: "+46 Moldes Bebê",
    text: "Bodies, macacões, vestidos, calças, shorts, toucas e jardineiras — tamanhos RN a 3 anos.",
    valor: "R$ 47",
  },
  {
    img: mockupExtras,
    tag: "Bônus 1",
    title: "Modelos Extras Pet",
    text: "Coletes, capas de chuva, bandanas, macacões e roupinhas de verão para cães e gatos.",
    valor: "R$ 37",
  },
  {
    img: mockupCurso,
    tag: "Bônus 2",
    title: "Curso de Costura",
    text: "12 aulas do básico ao avançado: máquina, tipos de ponto, corte, montagem e acabamento.",
    valor: "R$ 67",
  },
  {
    img: mockupDicas,
    tag: "Bônus 3",
    title: "Guia de Dicas Práticas",
    text: "36 arquivos com truques de acabamento, cuidados com o tecido e ajustes profissionais.",
    valor: "R$ 27",
  },
];

const prints = [
  {
    img: printSueli,
    alt: "Depoimento de Sueli Gerra mostrando um pijama infantil feito com os moldes",
  },
  {
    img: printSilvia,
    alt: "Depoimento de Silvia Matos elogiando a compra dos moldes",
  },
  {
    img: printKatia,
    alt: "Depoimento de Kátia Luciana dizendo que os moldes agilizam o trabalho",
  },
];

const depoimentos = [
  {
    nome: "Maria A.",
    foto: fotoMaria,
    texto:
      "Comprei achando que era pouca coisa e me surpreendi. Já fiz três bodies para minha sobrinha na primeira semana.",
  },
  {
    nome: "Joana R.",
    foto: fotoJoana,
    texto:
      "Os moldes vêm com as medidas certinhas. Comecei vendendo roupinha de pet no meu bairro e já paguei o pack muitas vezes.",
  },
  {
    nome: "Rosa S.",
    foto: fotoRosa,
    texto:
      "Nunca tinha costurado. Segui o curso e o guia de dicas e consegui terminar um macacão sem ajuda.",
  },
];

const faq = [
  {
    q: "Como recebo os moldes?",
    a: "Tudo é digital. Após a confirmação do pagamento você recebe um e-mail com o link para baixar todos os arquivos em PDF.",
  },
  {
    q: "Preciso ter máquina de costura?",
    a: "Ajuda muito, mas várias peças podem ser feitas à mão. O curso mostra as duas formas.",
  },
  {
    q: "Serve para quem nunca costurou?",
    a: "Sim. Os moldes já vêm marcados com frente, costas, mangas e quantidade de cortes no tecido.",
  },
  {
    q: "Posso vender as peças que eu fizer?",
    a: "Pode. O uso é liberado para produção e venda das suas peças costuradas.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:py-20">
          <h1 className="text-4xl leading-[1.05] md:text-6xl">
            Mais de 1000 moldes de costura{" "}
            <span className="text-gradient-brand">prontos para imprimir</span> e
            costurar hoje
          </h1>
          <img
            src={hero.url}
            alt="Moldes de costura organizados em pastas por categoria no notebook, tablet e celular"
            className="mx-auto mt-8 w-full max-w-3xl"
            style={{ filter: "drop-shadow(var(--shadow-lift))" }}
          />
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Moldes de bebê, pet, adulto e acessórios em PDF, com curso de costura e
            guia de dicas inclusos. Baixe na hora, imprima em A4 e comece pela peça que
            você mais quiser.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="hero" asChild>
              <a href={CHECKOUT_URL}>Quero meus moldes agora</a>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span>+3.700 costureiras já baixaram</span>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que vem dentro */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl">O que você recebe</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Quatro pacotes organizados em pastas, prontos para abrir no celular,
            tablet ou computador.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {itens.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-border bg-card"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="bg-secondary/60 p-4">
                <img
                  src={item.img.url}
                  alt={item.title}
                  loading="lazy"
                  className="mx-auto h-56 w-full object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                    {item.tag}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {item.valor}
                  </span>
                </div>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Organização */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div
          className="rounded-3xl border border-border bg-card p-8"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl">
              Tudo separado por categoria, sem confusão
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Pastas por categoria: masculino, feminino, infantil, pet e bônus",
                "Cada molde em PDF próprio, com tamanho indicado no arquivo",
                "Marcações de frente, costas, manga e quantidade de cortes",
                "Funciona no celular, tablet ou computador — sem programa extra",
                "Baixe uma vez e use quantas vezes quiser",
              ].map((li) => (
                <li key={li} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="px-5 py-14">
        <div
          className="mx-auto max-w-3xl rounded-3xl p-8 text-center text-primary-foreground md:p-12"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-lift)" }}
        >
          <img
            src={mockupOferta.url}
            alt="Tudo que está incluso no pack: moldes em PDF, curso de costura e guia de dicas no notebook e tablet"
            loading="lazy"
            className="mx-auto mb-8 w-full max-w-xl rounded-2xl"
          />
          <h2 className="text-3xl md:text-4xl">Leve o pack completo hoje</h2>
          <p className="mt-3 opacity-90">
            Moldes bebê + pet + curso de costura + guia de dicas. Valor separado de
            R$ 178.
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest opacity-80">
            Hoje por apenas
          </p>
          <p className="mt-1 text-6xl font-extrabold md:text-7xl">R$ 19,90</p>
          <p className="mt-1 opacity-90">pagamento único • acesso imediato</p>
          <div className="mt-8">
            <Button size="lg" variant="cta" asChild>
              <a href={CHECKOUT_URL}>Quero garantir meu acesso</a>
            </Button>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm opacity-90">
            <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias — não gostou,
            devolvemos seu dinheiro
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-center text-3xl md:text-4xl">Quem já está costurando</h2>
        <div className="mt-10 grid items-start gap-5 md:grid-cols-3">
          {prints.map((p) => (
            <figure
              key={p.alt}
              className="overflow-hidden rounded-2xl border border-border bg-card p-3"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={p.img.url}
                alt={p.alt}
                loading="lazy"
                className="w-full rounded-xl"
              />
            </figure>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">“{d.texto}”</p>
              <footer className="mt-4 flex items-center gap-3">
                <img
                  src={d.foto.url}
                  alt={`Foto de ${d.nome}`}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="text-sm font-bold text-foreground">{d.nome}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="text-center text-3xl md:text-4xl">Perguntas frequentes</h2>
        <div className="mt-8 space-y-4">
          {faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" variant="hero" asChild>
            <a href={CHECKOUT_URL}>Baixar meus moldes por R$19,90</a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Pack Digital de Moldes de Costura • Produto 100% digital</p>
      </footer>
    </main>
  );
}
