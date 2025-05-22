
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

