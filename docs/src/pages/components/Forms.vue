<template>
  <div>
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

    <br><br><br>
    <h2>Readonly</h2>

    <v-form-input type="text" placeholder="Readonly input here…" readonly></v-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioOptions: [
        {id: 'roption1', value: 'option1', label: 'Option one is this and that&mdash;be sure to include why it\'s great'},
        {id: 'roption2', value: 'option2', label: 'Option two is this and that&mdash;be sure to include why it\'s great', checked: true},
        {id: 'roption2', value: 'option2', label: 'Option two is this and that&mdash;be sure to include why it\'s great', disabled: true}
      ]
    };
  }
};
</script>
