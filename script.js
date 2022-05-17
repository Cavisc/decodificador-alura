const inputTextoEntrada = document.querySelector('.input-texto')
const inputTextoSaida = document.querySelector('.texto-resultado')

//Area que aparece
const areaTexto = document.querySelector('.texto-criptografado')
//Informação que some
const infoResultado = document.querySelector('.mensagem-resultado')

//Funções para criptografar
function criptografar() {
  const textoEncriptado = encriptar(inputTextoEntrada.value)
  inputTextoSaida.value = textoEncriptado

  if (textoEncriptado != '') {
    areaTexto.classList.add('texto-criptografado-aparece')
    infoResultado.classList.add('mensagem-resultado-desaparece')
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['a', 'ap'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]

  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  return stringEncriptada
}

//Botão criptografar
const btnCriptografar = document.querySelector('.criptografar')
btnCriptografar.addEventListener('click', criptografar)

function descriptografar() {
  const textoDesencriptado = desencriptar(inputTextoEntrada.value)
  inputTextoSaida.value = textoDesencriptado

  if (textoDesencriptado != '') {
    areaTexto.classList.add('texto-criptografado-aparece')
    infoResultado.classList.add('mensagem-resultado-desaparece')
  }
}

//Funções para descriptografar
function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['a', 'ap'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]

  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }

  return stringDesencriptada
}

//Botão descriptografar
const btnDescriptografar = document.querySelector('.descriptografar')
btnDescriptografar.addEventListener('click', descriptografar)

//Função para copiar
function copiar() {
  inputTextoSaida.select()
  inputTextoSaida.setSelectionRange(0, 99999)

  navigator.clipboard.writeText(inputTextoSaida.value)

  areaTexto.classList.remove('texto-criptografado-aparece')
  infoResultado.classList.remove('mensagem-resultado-desaparece')

  inputTextoEntrada.value = ''
}

//Botão copiar
const btnCopiar = document.querySelector('.copiar')
btnCopiar.addEventListener('click', copiar)
