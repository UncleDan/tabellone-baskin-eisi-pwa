# 📋 Guía de uso — Tabellone Baskin EISI (PWA)

*[Versione italiana](guida-it.md) · [English version](guide-en.md) · [Version française](guide-fr.md) · [Deutsche Version](guide-de.md)*

Esta guía explica cómo usar el marcador durante un partido de Baskin. Para la instalación y los detalles técnicos, consulta el [README](../README.md).

---

## 🏟️ Pantalla principal (modo partido)

Es la pantalla que se usa **durante el partido**.

- **▶️ / ⏸️** — inicia o detiene el cronómetro (también con la barra espaciadora).
- Al **acabar el tiempo** (tras la bocina automática) aparece **⏭ Periodo siguiente**: con confirmación avanza un periodo y devuelve el cronómetro al tiempo completo. Al final del 4º cuarto y de cada prórroga (`TS1`, `TS2`…) solo se ofrece **en caso de empate**.
- **✏️** abre los ajustes/correcciones. **⋯** abre el menú con la versión, las actualizaciones y otras opciones.
- **+1 / +2 / +3** a la izquierda y a la derecha aumentan la puntuación del Equipo 1 y del Equipo 2.
- Toca la **pastilla de tiempos muertos**: enciende un punto más; cuando están todos encendidos, el siguiente toque los reinicia.
- Los botones de **faltas** (**+** / **−**) solo aparecen si el *Recuento de faltas* está activado en los ajustes del partido. Por defecto están desactivados: quedan solo la etiqueta «Faltas» y los puntos del bonus.
- Abajo a la derecha: **📣 bocina** y **silbato**, para reproducir los sonidos manualmente.

## ⚙️ Pantalla de ajustes / correcciones (✏️)

Se usa para **corregir** un error o preparar el partido antes de empezar.

- El cronómetro se **detiene automáticamente** al entrar en esta pantalla.
- **✔️** guarda los cambios y vuelve al modo partido.
- Toca el **tiempo** (recuadro discontinuo) para abrir los selectores de minutos / segundos / décimas.
- Toca el **periodo** (recuadro discontinuo) para abrir el selector: `1`…`4`, luego `TS1`…`TS9` (prórrogas).
- Toca el **nombre de un equipo** (recuadro discontinuo): aparece el teclado para modificarlo. Debajo del nombre, una fila de colores define el color del texto.
- **−1 / −2 / −3** en los laterales reducen la puntuación.
- Abajo a la izquierda, el botón **Reiniciar** (rojo) reinicia el partido previa confirmación: puntos, faltas, tiempos muertos, tiempo y periodo vuelven a cero, manteniendo los ajustes y los nombres.

## 🏀 Ajustes del partido (desde el menú ⋯)

- **Modo**: **Baskin** (valores estándar) o **Personalizar** (todos los campos son modificables).
- **Lógica de tiempos muertos**: *Baskin* (1 por cuarto, con arrastre) o *Basket* (cupo por mitad, 2 en la 1ª y 3 en la 2ª).
- **Modo bonus**: *Últimos 2′ (Baskin)*, *Tras N faltas (Basket)*, o *Ninguno*.
- Duración del periodo y de las prórrogas, número de periodos, tiempos muertos, umbral de faltas para el bonus.
- **Silbato automático si el tiempo muerto no está disponible** y **bocina automática al acabar el tiempo**: siempre personalizables, incluso en modo Baskin.
- **Streaming BaskinCam**: envío automático del estado del partido a un dispositivo complementario en la red local.
- **Reiniciar aplicación**: borra todo y restablece los ajustes a los valores Baskin.

## 🔄 Posesión y bonus

- Las **flechas de posesión** (encima de las faltas): al tocar una se enciende esa y se apaga la otra.
- El **bonus** se indica con un punto por equipo junto a la etiqueta «Faltas».

## 🌐 Idioma

La aplicación está disponible en **italiano**, **inglés**, **francés**, **español** y **alemán**. Al abrirla por primera vez, el idioma se detecta automáticamente del dispositivo (si no es ninguno de los cinco admitidos, arranca en inglés); las **banderas** 🌐🇮🇹🇬🇧🇫🇷🇪🇸🇩🇪 del menú ⋯ permiten elegir uno concreto en cualquier momento.

Al abrir la aplicación con el parámetro `?lang=` en la dirección (p. ej. `?lang=de`) se fuerza un idioma solo para esa apertura, sin modificar la preferencia guardada: útil para enlaces directos, códigos QR o una pantalla secundaria en otro idioma.

El **nombre de los equipos**, si no se ha personalizado, sigue automáticamente el idioma elegido (p. ej. «Squadra 1» pasa a «Equipo 1» en español); un nombre escrito a mano permanece invariable al cambiar de idioma.

## 💾 Guardado automático

El estado del partido se guarda **después de cada acción**, incluso si la aplicación pasa a segundo plano o se cierra inesperadamente: al reabrirla se retoma exactamente donde lo dejaste (con el cronómetro detenido, por seguridad).

---

📄 Volver al [README](../README.md) · 🐞 [Informar de un problema](https://github.com/UncleDan/tabellone-baskin-eisi-pwa/issues)
