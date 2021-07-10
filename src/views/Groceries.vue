<template>
  <div class="groceries">
    <div class="groceries__head">
      <h1>Grocery Portal</h1>
    </div>
    <div class="groceries__body">
      <!-- <form>
        <Input inputType="text" placeholder="Enter title" />
        <Input inputType="text" placeholder="Shop location" />
        <Input inputType="number" placeholder="Total amount" />
        <StandardBtn @btn-clicked="handleSave" btnContent="Save Groceries" />
      </form> -->
      <!-- Section tiles -->
      <div class="groceries__tiles">
        <div class="groceries__tiles--tile">Total</div>
        <div class="groceries__tiles--tile">Total user spend</div>
        <div class="groceries__tiles--tile">Outstanding</div>
      </div>
      <!-- Section entries -->
      <div class="groceries__entries">
        <p>Entries</p>
      </div>
      <div class="groceries__btn">
        <!-- <StandardBtn @btn-clicked="handleAdd" btnContent="Add record" /> -->
        <ModalBtn @handle-modal="modalHandler()" btnContent="Add Entry" />
      </div>
    </div>
    <Modal />
  </div>
</template>

<script>
// import Input from '../components/forms/Input'
// import StandardBtn from '../components/buttons/StandardBtn'
import ModalBtn from '../components/modals/ModalBtn'
import Modal from '../components/modals/Modal'
import { mapActions } from 'vuex'
export default {
  components: {
    // Input,
    // StandardBtn,
    Modal,
    ModalBtn
  },
  methods: {
    ...mapActions(['getModalAction']),
    modalHandler () {
      console.log('You want to add a record')
      this.getModalAction('modalAddGrocery')
    }
  }
}
</script>

<style scoped lang="scss">
.groceries {
  width: 100%;
  height: 100%;

  &__tiles {
    padding: 1rem;

    @media only screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &--tile {
      width: 100%;
    }
  }

  &__entries {
    padding: 1rem;
  }
}
</style>
