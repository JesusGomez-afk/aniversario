document.addEventListener("DOMContentLoaded", () => {
  const hola = document.getElementById("texto1");
  const boton = document.getElementById("miBoton");
  const extra = document.getElementById("extra");
  const ticket = document.getElementById("ticket");
  const cita = document.getElementById("cita");
  let clickCount = 0;
  let extraClickCount = 0;

  boton.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
      hola.classList.remove("hidden", "opacity-0");
      hola.classList.add("opacity-80");
      boton.textContent = "Siguiente";
    } else if (clickCount === 2) {
      hola.textContent = `Genuinamente, me encantas un chingo. Me fascina todo de ti: tu carita preciosa, tu risa, tu sentido del humor (el cual insisto, es digno de comediante profesional), tu manera de verme, el sonido de tu voz.`;
    } else if (clickCount === 3) {
      hola.textContent = `Tus ojos preciosos (que no ven), tus besos deliciosos, la comida que preparas, cuando haces berrinche porque hace muchísimo calor, cuando no soportas que transpiro caliente y dormimos juntos pero sin tocarnos, jaja.`;
    } else if (clickCount === 4) {
      hola.textContent = `Y podría seguir así muchísimo… Sabes que me encanta enlistarte lo que me gusta de ti cada que puedo.`;
    } else if (clickCount === 5) {
      hola.textContent = `Me siento el más afortunado y agradecido por tenerte en mi vida y porque me permitas ser parte de la tuya.`;
    } else if (clickCount === 6) {
      hola.textContent = `He amado cada minuto, y jamás me he arrepentido de decidir amarte cada día de mi vida desde que te conozco.`;
    } else if (clickCount === 7) {
      hola.textContent = `No te miento cuando te digo que estos últimos días me has hecho tanta falta. Te he extrañado muchísimo, no he soportado no verte.`;
    } else if (clickCount === 8) {
      hola.textContent = `He estado a punto de llorar solo de pensar en cuánto te extraño y en las ganas inmensas que tengo de volver a verte.`;
    } else if (clickCount === 9) {
      hola.textContent = `Cuando no estoy contigo, realmente siento que me falta algo, como si no tuviera todo lo que necesito para vivir como me gustaría.`;
    } else if (clickCount === 10) {
      hola.textContent = `Te amo millones, espero poder seguir compartiendo mi vida contigo y que tu compartas la tuya conmigo, estoy muy feliz de haber conocido a la Sofia foranea que seguia en la uni y le gustaban las mismas canciones que a mi`;
    } else if (clickCount === 10) {
      hola.textContent = `Soy el más feliz de haber conocido a la Sofía foránea que estaba cursando la uni y le gustaban las mismas canciones que a mí.`;
    } else if (clickCount === 11) {
      hola.textContent = `Y soy el más orgulloso de la Sofía en la que te has convertido: igual de auténtica, divertida, interesante, encantadora, guapa, una compañía increíble, excelente besadora y con una voz que podría escuchar todo el día`;
    } else if (clickCount === 12) {
      hola.textContent = `Solo quiero decirte que...`;
    } else if (clickCount === 13) {
      hola.classList.remove("text-justify");
      hola.classList.add("text-center");
      hola.textContent = `Te amo, gracias por todo`;
      boton.classList.add("opacity-0");
      setTimeout(() => {
        extra.classList.remove("opacity-0");
        extra.classList.add("opacity-100");
      }, 2500);
    }
  });

  extra.addEventListener("click", () => {
    extraClickCount++;
    if (extraClickCount === 1) {
      extra.classList.remove("opacity-100");
      extra.classList.add("opacity-0");
      hola.classList.remove("opacity-80");
      hola.classList.add("opacity-0");
      setTimeout(() => {
        hola.classList.add("hidden");
      }, 4000);
      ticket.classList.remove("-top-100");
      ticket.classList.add("top-100");
      ticket.classList.remove("top-100");
      ticket.classList.add("top-40");
      ticket.classList.remove("top-60");
      ticket.classList.add("top-70");
      cita.classList.remove("opacity-0");
      cita.classList.add("opacity-100");
    }
  });
});
