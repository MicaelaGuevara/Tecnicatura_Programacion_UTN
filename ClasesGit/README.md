
# 🚀 Curso de Git y Terminal - Tecnicatura

Este curso está diseñado para introducirte al mundo de Git, GitHub y la terminal de comandos. A lo largo de las clases, aprenderás desde los comandos más básicos hasta técnicas más avanzadas de control de versiones y manejo de ramas con Gitflow.

---

## 📅 CLASE 1 - Introducción a la Terminal

### 📁 Navegación y Comandos Básicos

```bash
pwd             # Muestra la ruta actual
cd              # Cambia de directorio
cd /            # Ir a la raíz del disco
cd ~            # Ir a la carpeta del usuario
ls              # Lista los archivos del directorio actual
ls -al          # Lista todo, incluyendo archivos ocultos
clear           # Limpia la terminal
cd ..           # Sube un nivel
cd U + [Tab]    # Autocompletado
cd /D           # Cambia de disco (Windows)
df -h           # Muestra espacio en disco (Linux)
cd /mnt/d       # Accede al disco D desde WSL
```

### 🗂️ Creación de Carpetas

```bash
mkdir Tecnicatura
cd tecnicatura
mkdir Python Java JavaScript
```

---

## 📅 CLASE 2 - Primeros pasos con Git

### 📄 Archivos y Repositorio

```bash
touch vacio.txt     # Crea un archivo vacío
cat vacio.txt       # Muestra el contenido
history             # Historial de comandos
!72                 # Ejecuta el comando número 72
rm vacio.txt        # Borra archivo
```

### 🧱 Inicializar Git

```bash
git init
git config --global user.name "Ariel Betancud"
git config --global user.email "betancudariel@gmail.com"
git add .
git commit -m "Primer commit"
git log
```

---

## 📅 CLASE 3 - Archivos y README

```bash
mkdir class-git
cd class-git
touch README.md
git add .
git commit -m "Agregar README"
```

---

## 📅 CLASE 4 - Commits en profundidad

```bash
touch historia.txt
git add .
git commit
# En Vim:
Esc + :wq!
# o
Esc + Shift + Z + Z

git log historia.txt
git diff <hash_viejo> <hash_nuevo>
```

---

## 📅 CLASE 5 - Gitflow y ramas

### 🤓 ¿Qué es el staging?
Es el área donde Git guarda cambios antes de confirmarlos con un commit.

### 🌿 Gitflow: Modelo de ramas
- **Master**: rama principal
- **Develop**: rama de desarrollo
- **Feature**: para nuevas funciones
- **Release**: estabilizar código antes del despliegue
- **Hotfix**: para corregir errores críticos

```bash
git branch cambios
git checkout master
git branch second
git branch hotfix
git branch -d cambios  # Elimina rama
```

---

## 📅 CLASE 6 - Volver en el tiempo: `reset` y `checkout`

```bash
git log --oneline
git reset <hash> --soft   # Vuelve a commit anterior sin borrar cambios
git reset <hash> --hard   # Borra todo
git checkout <hash>       # Ver versión específica
git checkout master       # Vuelve a la rama principal
```

---

## 📅 CLASE 7 - `git reset` vs. `git rm`

### 🔁 `git reset`
- `--soft`: mantiene cambios en staging
- `--mixed`: saca de staging
- `--hard`: borra todo

### ❌ `git rm`
- `--cached`: saca del staging, conserva archivo
- `--force`: elimina completamente

```bash
git reset HEAD archivo    # Saca del staging
git rm --cached archivo   # Deja de trackear
```

---

## ✅ Conclusión

Este curso te da las herramientas esenciales para manejar proyectos con Git desde la línea de comandos. Aprende buenas prácticas, como trabajar con ramas, y conoce las diferencias entre `reset`, `rm`, y `revert`.

---

📚 ¡Sigue practicando y versiona como un profesional!

## 📅 CLASE 8 - Portafolio 2  
📆 MIÉRCOLES 28 DE MAYO DEL 2025  
🔗 *Flujo de trabajo básico con un repositorio remoto - Parte 8*

Cuando empiezas a trabajar en un entorno local, el proyecto vive únicamente en tu computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.

Para solucionar esto, utilizamos **servidores remotos**: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Estos servidores remotos pueden estar alojados en GitHub, GitLab, BitBucket, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto.

Así, el equipo podrá descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

---

## 🧰 Comandos para trabajo remoto con Git

```bash
git clone url_del_servidor_remoto  # Descargar archivos y el historial completo

git push                           # Enviar cambios al servidor remoto

git fetch                          # Traer actualizaciones del servidor remoto

git merge                          # Combinar cambios del servidor remoto con el local

git pull                           # git fetch + git merge
```

---

## 🗂️ Comandos adicionales útiles para proyectos grandes

```bash
git log --oneline                      # ID y título de cada commit
git log --decorate                     # Muestra HEAD y referencias
git log --stat                         # Líneas modificadas por archivo
git log -p                             # Muestra cambios en contenido línea por línea
git shortlog                           # Commits por usuario
git log --graph --oneline --decorate --all  # Vista gráfica de todos los commits
git log -3                             # Muestra últimos 3 commits
git log --after="2018-1-2"             # Commits después de una fecha
git log --after="today"              
git log --after="2018-1-2" --before="today"  # Rango de fechas
git log --author="Name Author"        # Commits por autor exacto
git log --grep="INVIE"                # Buscar por mensaje exacto
git log --grep="INVIE" -i             # Buscar por mensaje ignorando mayúsculas
git log -- index.html                 # Commits sobre un archivo específico
git log -S "Por contenido"            # Buscar contenido específico
git log > log.txt                     # Guardar log en archivo txt
```

---

## ✅ Conclusión

Hoy aprendimos a trabajar con servidores remotos y a utilizar comandos para mantener nuestros repositorios sincronizados y organizados, sin importar el tamaño del proyecto.

---

📝 **Tarea**: Agregar esta clase al `README.md` en lenguaje Markdown como hicimos anteriormente y hacer el *commit* correspondiente.

---

🚀 ¡Dominá Git y colaborá como un verdadero profesional!


## 📅 CLASE 9-A - Portafolio 3  
📆 MIÉRCOLES 4 DE JUNIO DEL 2025  
🔀 *Introducción a las ramas o branches de Git - Parte 9*

Cuando entramos en el proyecto veremos que nos encontramos con la rama `master`, y es a partir de allí que debemos saber que esta es la **rama madre o principal**, y las otras ramas se crean para no afectarla directamente.

Las ramas (`branches`) nos permiten hacer cambios en el proyecto sin alterar el flujo principal de trabajo. Son útiles para trabajar en funcionalidades específicas o experimentar sin riesgo.

La **cabecera** o `HEAD` representa la rama y el commit en el que estamos trabajando. Por defecto, apunta al último commit de la rama principal, pero puede cambiar al crear o cambiar de rama.

---

## 🌿 ¿Cómo funcionan las ramas en Git?

- Permiten hacer cambios sin afectar la rama principal.
- Facilitan el desarrollo paralelo de nuevas funciones.
- Nos permiten experimentar y luego fusionar si todo funciona bien.

---

## 🧰 Comandos esenciales para trabajar con ramas

```bash
git branch nombre-rama         # Crear nueva rama
git checkout nombre-rama       # Cambiar a otra rama
git checkout -b rama           # Crear y cambiar de rama al mismo tiempo

git reset id-commit            # Moverse a un commit y eliminar historial posterior
git checkout rama-o-id-commit  # Moverse sin eliminar historial
```

---

## 🧪 Práctica: Crear y fusionar ramas

1. Crear una nueva rama paralela llamada `second`.
2. Hacer cambios en esa rama.
3. Fusionarla de nuevo con `master` usando `merge`.

---

## 💻 Terminal paso a paso

```bash
# Abrir terminal
cd Tecnicatura
cd class-git
code .                          # Abrir proyecto en VSCode

touch index.html                # Crear archivo
# Escribir un <h1> con tu nombre y guardar (ctrl + s)
# Abrir con Live Server y ver cambios

git status
git commit -am "mensaje"        # Commit rápido si ya existe el archivo
# O bien:
git commit -a -m "mensaje"
# O con editor:
git commit -a
# En Vim:
# esc + i -> escribir mensaje
# esc -> salir
# :wq! (Windows) o ctrl + x (Linux)

git log                         # Ver historial
git log --stat                  # Ver historial con archivos
git branch                      # Ver rama actual
git show                        # Ver último commit
ctrl + l                        # Limpiar consola

git branch second               # Crear rama second
git show                        # HEAD apunta a master

git checkout second             # Cambiar a rama second
git branch                      # Confirmar en qué rama estás
git status                      # Confirmar HEAD
```

---

## 🎥 Contenido adicional

Se visualizarán videos con el tutor para aprender cómo avanzar con el portafolio en esta etapa.

---

## ✅ Conclusión

Hoy aprendimos cómo gestionar ramas en Git para trabajar de forma organizada y colaborativa, creando entornos seguros para experimentar y luego fusionar al flujo principal del proyecto.

---

📝 **Tarea**: Agregar esta clase al `README.md` y realizar el *commit* correspondiente.

---

🌿 ¡Controlá tus versiones y desarrollá con confianza!

## 📅 CLASE 9-B - Portafolio 4  
📆 MIÉRCOLES 4 DE JUNIO DEL 2025  
🔗 *Fusión de ramas con Git merge - Parte 10*

La **fusión** en Git permite unir un historial bifurcado. Con `git merge`, podemos integrar líneas de desarrollo independientes generadas por `git branch` en una sola rama. Esto crea un nuevo commit que combina dos ramas: la rama actual y la rama indicada.

> ℹ️ El comando `merge` afecta **solo a la rama actual**, no a la rama de destino.

---

## ⚙️ Funcionamiento de Git merge

Git merge busca una base común entre ramas y genera una confirmación de fusión (commit) que representa la combinación de ambas líneas de desarrollo.

---

## 🔀 ¿Cómo unir dos ramas?

Para combinar ramas:

```bash
git checkout master       # Cambiar a la rama principal
git merge segunda         # Fusionar cambios de la rama 'segunda'
```

⚠️ En caso de conflicto, **guardar los cambios antes de cambiar de rama**.

---

## 🧰 Comandos básicos de Git y GitHub

```bash
git init                                # Inicializar repositorio
git add .                               # Agregar archivos al staging
git commit -m "mensaje"                 # Guardar cambios
git branch nombre_rama                  # Crear nueva rama
git checkout nombre_rama                # Cambiar de rama
git push origin rama                    # Enviar cambios a servidor remoto
git fetch                               # Traer cambios del servidor remoto
git merge rama                          # Fusionar ramas
git pull origin rama                    # Traer y fusionar cambios remotos
git checkout <código> <archivo>         # Volver a versión anterior del archivo

git reset                               # Volver a versiones anteriores
git reset --soft                        # Conserva en staging
git reset --hard                        # Borra todo
git reset HEAD                          # Saca del staging sin borrar

git rm                                  # Eliminar archivos
git rm --cached                         # Quitar del staging sin borrar archivo
git rm --force                          # Quitar del staging y disco

git status                              # Ver estado de archivos
git log                                 # Ver historial
git log --stat                          # Ver cambios específicos
git show                                # Mostrar detalles de commits
git diff código1 código2                # Comparar entre versiones
git diff                                # Comparar entre directorio y staging
```

---

## ⚔️ Ejemplo con conflicto (Producción)

```bash
# En rama 'segunda':
git status
git commit -am "Finalizado el cambio en rama segunda"

# En rama 'master':
git checkout master
# Realizar cambios, guardar
git commit -am "Agregado el contenido adicional del archivo y un mejor aporte"

# Ver diferencias:
git checkout segunda
git checkout master
git merge segunda  # Posibles conflictos

# Resolver conflictos en VSC
git commit -am "Arreglando conflicto"
git status

# Revisión final
git commit -am "Solucionado el conflicto 2"
git merge segunda
git commit -am "Volví a comentar en este caso de mi área laboral"
git log
q  # Salir

git commit -am "Guardar estos cambios en el README.md"

# Traer cambios inversamente
git checkout segunda
git merge master
git commit -am "Cargamos esto ahora"

# Volver y terminar
git checkout master
git merge segunda
```

---

## ✅ Conclusión

Hoy aprendimos a **fusionar ramas con `git merge`**, resolvimos conflictos y practicamos flujos reales entre ramas. Este proceso es clave para coordinar trabajo en equipo y mantener un historial limpio y funcional.

---

📝 **Tarea**: Agregar esta clase al `README.md`, realizar el *commit* y probar la fusión de ramas de forma práctica.

---

🔁 ¡Dominá la fusión de ramas y controlá tus versiones como un profesional!





# 📚 CLASE 10-A – Portafolio 5  
### 🗓️ Miércoles 11 de junio del 2025  
## 🧩 Resolución de conflictos al hacer merge  

---

## 📖 Sección Lectura

Git nunca borra nada a menos que se lo indiquemos explícitamente. Al usar comandos como `git merge` o `git checkout`, solo estamos cambiando de rama o creando commits, **no borrando ramas ni historial**.

### 🧠 ¿Qué es un conflicto?

Cuando dos ramas hacen cambios diferentes sobre la misma línea de un archivo, Git **no puede decidir cuál conservar**, y aparece un conflicto que debe resolverse **manualmente**.

### ✅ ¿Cómo resolverlo?

1. Hacemos el `merge`.
2. Abrimos el archivo en conflicto.
3. Elegimos qué cambios conservar (usando Visual Studio Code o manualmente).
4. Guardamos.
5. Ejecutamos:
   ```bash
   git add archivo.html
   git commit -m "Solución de conflictos al mergear las ramas"
   ```

### ⚠️ Archivos Unmerged

Tras un conflicto, los archivos entran en estado **Unmerged**. Para resolverlo:

```bash
git status        # Ver el estado
git add .         # Pasar al área de staging
git commit -m "Conflicto resuelto"
```

### 🔄 Revertir un merge

Si quieres cancelar el merge:

```bash
git merge --abort
```

---

## 🌐 Trabajando con Repos Remotos

- Clonar: `git clone <enlace>`  
- Actualizar: `git fetch` o `git pull`  
- Subir cambios: `git push origin <rama>`  

```bash
git clone enlace-ssh
git fetch
git push origin master
git merge
git pull origin master
git commit -am "Este es un commit rápido"
git branch             # Ver ramas
git branch second      # Crear rama 'second'
git checkout second    # Cambiar a rama 'second'
# Editar archivos, luego:
git add .
git commit -m "Cambios en el archivo de trabajo"
git push origin second
git checkout master
git merge second       # Unir cambios en master
git push origin master
```

> Para crear commits rápidos: `git commit -am "mensaje"`

> Para configurar la rama principal por defecto como `main`:
```bash
git config --global init.defaultBranch main
```

---

## 🛠️ Sección Práctica

```bash
# En master
git status
git add .
git commit -m "Agregando cambios nuevos al archivo de trabajo"
git push origin master
git log
q

# En second
git checkout second
git merge master
git push origin second
```

### 🔥 Simulando un conflicto

1. En `second`, modifica el HTML y guarda.
2. Commitea:  
   ```bash
   git commit -am "Modifiqué el HTML y el color del texto"
   ```
3. En `master`, haz otros cambios y commitea:  
   ```bash
   git commit -am "Agregué información y cambié texto a azul"
   ```
4. En `master`, realiza el merge:  
   ```bash
   git merge second
   ```

### 🧩 Resolviendo el conflicto

- Abre el archivo y elige entre los cambios entrantes o actuales.
- Guarda y luego:

```bash
git status
git commit -am "Solución de conflictos al mergear las ramas"
```

- Finalmente, sincroniza las ramas:
```bash
git checkout second
git merge master
```

---

## 📘 Recordatorio: ¿Qué es un branch?

Un **branch** es una línea paralela de desarrollo donde puedes trabajar sin afectar la rama principal. Ideal para nuevas funcionalidades o pruebas.

---

📚 ¡Sigue practicando y versiona como un profesional! 💪

# 🔐 CLASE 10-B – Portafolio 6  
### 🗓️ Miércoles 11 de junio del 2025  
## 🔑 Cómo funcionan las llaves públicas y privadas  

---

## 📖 Sección Lectura

Las **llaves públicas y privadas** son la base del **cifrado asimétrico**, un método que permite **enviar mensajes seguros entre múltiples partes**.

### 🧠 ¿Qué son las llaves públicas y privadas?

- Son **pares de claves** vinculadas entre sí: lo que una cifra, solo la otra puede descifrar.
- Se usan para **cifrar (encriptar)** y **descifrar** mensajes.
- Este sistema garantiza **privacidad y autenticidad** al momento de enviar información.

---

## 🔄 ¿Cómo funciona el cifrado?

1. ✍️ **Cada persona genera un par de llaves**: una pública y una privada.
2. 📤 **Comparten su llave pública** con los demás (no hay problema si es interceptada).
3. 📩 Para enviar un mensaje:
   - Se **cifra el mensaje con la llave pública** del destinatario.
   - Solo la **llave privada** del destinatario puede **descifrar el mensaje**.
4. 🔓 El receptor **descifra el mensaje** con su llave privada.

> ⚠️ **Nunca compartas tu llave privada.** Solo la pública puede compartirse libremente.

---

## 🔐 Ventajas del cifrado asimétrico

- ✅ Asegura que **solo el receptor deseado pueda leer el mensaje**.
- 🔒 Protege la información incluso si es interceptada durante el envío.
- 📄 Se usa ampliamente en firmas digitales, conexiones seguras (HTTPS), autenticación y blockchain.

---

## 🧪 Ejemplo Visual

```
Persona A                Persona B
---------                ---------
Llave pública A          Llave pública B
Llave privada A          Llave privada B

-> Persona A usa llave pública de B para cifrar mensaje
-> Persona B usa su llave privada para descifrarlo
```

---

## 📌 Conclusión

Las llaves públicas y privadas son **esenciales para la seguridad digital moderna**. Nos permiten compartir datos con confianza, sin temor a que terceros accedan a nuestra información.

🔐 **Comparte tu llave pública, guarda tu llave privada.**

---

📚 ¡Sigue aprendiendo sobre seguridad y protege tu información como un experto!


# 🛡️ CLASE 11 – Portafolio 7  
### 🗓️ Miércoles 18 de julio del 2025  
## 🔐 Configura tus llaves SSH en local  

---

## 📖 ¿Por qué usar llaves SSH?

Usar solo usuario y contraseña en GitHub es riesgoso. Si pierdes tu computadora, alguien podría tener acceso a tus repos, contraseñas y proyectos. **Con las llaves SSH, mejoras drásticamente la seguridad y ya no necesitarás introducir tu usuario y contraseña cada vez.**

---

## 🧠 ¿Cómo funciona SSH con GitHub?

1. 🔑 Generas una **llave pública** y una **privada**.
2. 📨 Envíes la **llave pública** a GitHub.
3. 🔐 GitHub reconoce tu llave y se conecta contigo por el protocolo **SSH**, no HTTPS.
4. 🤝 Durante la primera conexión, GitHub también comparte su llave pública contigo.
5. 🔒 Puedes añadir contraseña adicional a tu llave privada.

> Las llaves SSH no son por proyecto, sino por persona y computadora.

---

## 🛠️ Comandos básicos

### Windows (Git Bash como administrador):

```bash
git config -l
git config --global user.email "alumnos@mail.com"
ssh-keygen -t rsa -b 4096 -C "alumnos@mail.com"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_gd456123
```

### Linux (Terminal fuera de carpetas de proyectos):

```bash
ssh-keygen -t rsa -b 4096 -C "alumnos@mail.com"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_gd456123
```

> 🗂️ `~` es la carpeta HOME del usuario. Asegúrate de especificar correctamente la **ruta a tu llave privada**, NO a la `.pub`.

---

## 🍏 MacOS

```bash
eval "$(ssh-agent -s)"
```

Luego, crea o edita un archivo `config` dentro de la carpeta `~/.ssh` con:

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ruta-donde-guardaste-tu-llave-privada
```

Después, añade tu llave:

```bash
ssh-add -K ruta-donde-guardaste-tu-llave-privada
```

---

## 🔁 Repaso rápido: crear tu llave SSH

```bash
ssh-keygen -t rsa -b 4096 -C "tu@email.com"
eval $(ssh-agent -s)
ssh-add ruta-donde-guardaste-tu-llave-privada
```

---

## 🔐 ¿Qué es el 2FA? (Segundo Factor de Autenticación)

El **2FA** agrega una capa de seguridad extra. Si pierdes el celular u ordenador, tendrás respaldo.

### 🔧 Para configurarlo:

1. Haz clic en tu perfil (esquina superior derecha).
2. Entra en **Settings**.
3. Ve a **Password and Authentication**.
4. Usa una de estas opciones:

#### 📱 GitHub Mobile

Instala la app y actívalo. Recibirás códigos en la app cada vez que inicies sesión.

#### 📲 App Authenticator

Agrega la cuenta escaneando un código QR. Recomendación: **Twilio Authy Authenticator**.

> Guarda bien tus datos para no perder acceso al cambiar de dispositivo.

---

📚 ¡Ahora sí, a trabajar de forma segura y profesional con GitHub y SSH!