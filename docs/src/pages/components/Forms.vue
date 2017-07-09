<template>
  <div>
    <h2>Form controls</h2>

    <example-container>
      <v-form-input id="exampleInputEmail1"
        label="Email address"
        type="email" placeholder="Enter email" description="We'll never share your email with anyone else."></v-form-input>

      <v-form-input id="exampleInputPassword1"
        label="Password"
        type="password" placeholder="Password" description="Enter password"></v-form-input>

      <v-form-select id="exampleSelect1"
        label="Example select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </v-form-select>

      <v-form-select id="exampleSelect2"
        label="Example multiple select" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </v-form-select>

      <v-form-input id="exampleTextarea"
        label="Example textarea"
        description="Enter textarea" textarea></v-form-input>

      <v-form-input id="exampleInputEmail1"
        label="File input"
        type="file"  description="This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."></v-form-input>

      <v-form-radio label="Radio buttons" :items="radioOptions">
      </v-form-radio>

      <v-form-check label="Check me out"></v-form-check>
      <v-button type="submit" btnStyle="primary">Submit</v-button>
    </example-container>

    <h2>Textual inputs</h2>
    
    <h2>Readonly</h2>

    <v-form-input type="text" placeholder="Readonly input here…" readonly></v-form-input>

    <br>

    <v-form-input type="text" placeholder=".form-control-lg" size="large"></v-form-input>
    <v-form-input type="text" placeholder=".form-control-lg"></v-form-input>
    <v-form-input type="text" placeholder=".form-control-sm" size="small"></v-form-input>

    <br>
    <v-form-select size="large">
      <option>Large select</option>
    </v-form-select>
    <v-form-select>
      <option>Default select</option>
    </v-form-select>
    <v-form-select size="small">
      <option>Small select</option>
    </v-form-select>

    <br>
    <v-form-input id="exampleInputEmail1"
      label="Email address"
      type="email" placeholder="Enter email" description="We'll never share your email with anyone else."
      :feedback="success"></v-form-input>

    <v-form-input id="exampleInputEmail1"
      label="Email address"
      type="email" placeholder="Enter email" description="We'll never share your email with anyone else."
      :feedback="warning"></v-form-input>

    <v-form-input id="exampleInputEmail1"
      label="Email address"
      type="email" placeholder="Enter email" description="We'll never share your email with anyone else."
      :feedback="danger"></v-form-input>
  </div>
</template>

<script>
import exampleContainer from '../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      radioOptions: [
        {id: 'roption1', value: 'option1', label: 'Option one is this and that&mdash;be sure to include why it\'s great'},
        {id: 'roption2', value: 'option2', label: 'Option two is this and that&mdash;be sure to include why it\'s great', checked: true},
        {id: 'roption2', value: 'option2', label: 'Option two is this and that&mdash;be sure to include why it\'s great', disabled: true}
      ],
      success: {
        status: 'success',
        message: 'Success! You\'ve done it.'
      },
      warning: {
        status: 'warning',
        message: 'Shucks, check the formatting of that and try again.'
      },
      danger: {
        status: 'danger',
        message: 'Sorry, that username\'s taken. Try another?'
      }
    };
  }
};
</script>
