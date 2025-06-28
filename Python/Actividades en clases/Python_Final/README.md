# Proyecto Final Python - Entorno Virtual y Git 🐍💻

Este proyecto muestra cómo crear un entorno virtual en Python, cómo iniciar un repositorio Git local y conectarlo con uno remoto en GitHub. Además, incluye una breve investigación sobre qué es `pip` y por qué es importante actualizarlo.

---

## 🧾 Pasos realizados

### 1. Abrir la terminal
Abrimos Git Bash (Windows) o terminal (Linux). En Windows, es recomendable abrirla como administrador.

### 2. Crear una carpeta
```bash
mkdir python-final
```

### 3. Entrar a la carpeta
```bash
cd python-final
```

### 4. Iniciar el repositorio Git
```bash
git init
```

### 5. Crear un archivo `.py`
```bash
touch finales.py
```

### 6. Abrir Visual Studio Code en la carpeta
```bash
code .
```

### 7. Verificar la versión de Python instalada
```bash
python -V
python3 -V
```

### 8. Crear el entorno virtual
```bash
python3 -m venv venv
```

### 9. Activar el entorno virtual

**En Linux/Mac:**
```bash
source venv/bin/activate
```

**En Windows:**
```bash
venv\Scripts\activate
```

### 10. Actualizar `pip`
```bash
python3 -m pip install --upgrade pip
```

---

## ❓ ¿Qué es pip y por qué lo actualizamos?

`pip` es el sistema de gestión de paquetes de Python. Nos permite instalar, actualizar y eliminar librerías externas que usamos en nuestros proyectos (como Flask, Pandas, NumPy, etc.).

Actualizamos `pip` para tener:
- Acceso a la última versión y mejoras.
- Compatibilidad con los paquetes más nuevos.
- Corrección de errores y mejoras de seguridad.

---

## ✅ Primer commit y push al repositorio remoto

1. Creamos el archivo `.gitignore` (opcional pero recomendable) para excluir `venv/`.
2. Hacemos el primer commit:
```bash
git add .
git commit -m "Proyecto inicial: entorno virtual y estructura base"
```
3. Conectamos con el repositorio en GitHub:
```bash
git remote add origin https://github.com/MicaelaGuevara/Tecnicatura_Programacion_UTN.git
git branch -M main
git push -u origin main
```

## 📎 Repositorio remoto

🔗 [https://github.com/MicaelaGuevara/Tecnicatura_Programacion_UTN.git](https://github.com/MicaelaGuevara/Tecnicatura_Programacion_UTN.git)


## 🧠 Cómo clonar este proyecto

```bash
git clone https://github.com/MicaelaGuevara/Tecnicatura_Programacion_UTN.git
cd python-final
python3 -m venv venv
source venv/bin/activate  # o venv\Scripts\activate en Windows
```
---