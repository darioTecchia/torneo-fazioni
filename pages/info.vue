<template>
  <div id="info" class="p-3">
    <div id="logos-wrapper" class="text-center">
      <Stemma class="mx-2" />
      <LogoIG class="me-2" />
      <Logo class="me-2" />
    </div>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Torneo delle Frazioni Comune di Sorrento 2023</h1>
      <p class="fs-5 text-muted">Modulistica</p>
    </div>
    <div class="d-flex justify-content-center mb-3 row row-cols-1 row-cols-md-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Regolamento</h4>
          </div>
          <div class="card-body">
            <div class="list-unstyled mt-3 mb-4">
              Documento contenente le principali regole del torneo.
            </div>
            <a class="w-100 btn btn-lg btn-outline-primary" download href="/regolamento.pdf" target="_blank"
              rel="noopener noreferrer">Scarica</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Modulo di iscrizione</h4>
          </div>
          <div class="card-body">
            <div class="list-unstyled mt-3 mb-4">
              Documento necessario all'iscrizione al torneo.
            </div>
            <a class="w-100 btn btn-lg btn-outline-primary" download href="/modulo_iscrizione.pdf" target="_blank"
              rel="noopener noreferrer">Scarica</a>
          </div>
        </div>
      </div>
    </div>

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Calendario Partite</h1>
    </div>

    <ul class="list-group mb-4" v-for="day, index in days">
      <h2>{{ index + 1 }}° Giornata</h2>
      <li v-for="match in day.matches" class="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <strong>{{ match.teams[0] }}</strong> vs <strong>{{ match.teams[1] }}</strong>
        </span>
        <span class="badge bg-primary rounded-pill">{{ match.when }}</span>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
export default ({
  name: 'Info',
  data() {
    return {
      days: [
        {
          matches: [
            {
              teams: ["Via degli Aranci", "Marano"],
              when: "17 Aprile 2023 - 22:00"
            },
            {
              teams: ["Priora", "Cattedrale"],
              when: "19 Aprile 2023 - 22:00"
            },
            {
              teams: ["Casarlano", "Santa Lucia"],
              when: "20 Aprile 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Via degli Aranci", "Priora"],
              when: "25 Aprile 2023 - 22:00"
            },
            {
              teams: ["Marano", "Casarlano"],
              when: "26 Aprile 2023 - 22:00"
            },
            {
              teams: ["Cattedrale", "Marina Grande"],
              when: "27 Aprile 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Priora", "Marano"],
              when: "2 Maggio 2023 - 22:00"
            },
            {
              teams: ["Santa Lucia", "Via degli Aranci"],
              when: "3 Maggio 2023 - 22:00"
            },
            {
              teams: ["Marina Grande", "Casarlano"],
              when: "4 Maggio 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Casarlano", "Priora"],
              when: "9 Maggio 2023 - 22:00"
            },
            {
              teams: ["Marano", "Cattedrale"],
              when: "10 Maggio 2023 - 22:00"
            },
            {
              teams: ["Marina Grande", "Santa Lucia"],
              when: "11 Maggio 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Priora", "Santa Lucia"],
              when: "16 Maggio 2023 - 22:00"
            },
            {
              teams: ["Marina Grande", "Marano"],
              when: "17 Maggio 2023 - 22:00"
            },
            {
              teams: ["Cattedrale", "Via degli Aranci"],
              when: "18 Maggio 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Casarlano", "Cattedrale"],
              when: "23 Maggio 2023 - 22:00"
            },
            {
              teams: ["Via degli Aranci", "Marina Grande"],
              when: "24 Maggio 2023 - 22:00"
            },
            {
              teams: ["Santa Lucia", "Marano"],
              when: "25 Maggio 2023 - 22:00"
            },
          ]
        },
        {
          matches: [
            {
              teams: ["Priora", "Marina Grande"],
              when: "30 Maggio 2023 - 22:00"
            },
            {
              teams: ["Cattedrale", "Santa Lucia"],
              when: "31 Maggio 2023 - 22:00"
            },
            {
              teams: ["Casarlano", "Via degli Aranci"],
              when: "1 Giugno 2023 - 22:00"
            },
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
#info {
  padding-bottom: 64px !important;
  max-width: 900px;
  margin: auto;
  text-align: justify;
}

h1 {
  text-align: center;
}

#logos-wrapper {
  svg {
    height: 50px;
    width: 50px;
    display: inline;
  }
}
</style>