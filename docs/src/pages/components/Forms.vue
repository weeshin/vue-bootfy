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
    <example-container>
      <v-form-input label="Text" type="text" row colsize="2" value="Artisanal kale" />
      <v-form-input label="Search" type="search" row colsize="2" value="How do I shoot web" />
      <v-form-input label="Email" type="email" row colsize="2" value="bootstrap@example.com" />
      <v-form-input label="URL" type="email" row colsize="2" value="https://getbootstrap.com" />
      <v-form-input label="Telephone" type="tel" row colsize="2" value="1-(555)-555-5555" />
      <v-form-input label="Password" type="password" row colsize="2" value="123456" />
      <v-form-input label="Number" type="number" row colsize="2" value="42" />
      <v-form-input label="Date and time" type="datetime-local" row colsize="2" value="2011-08-19T13:45:00" />
      <v-form-input label="Date" type="date" row colsize="2" value="2011-08-19" />
      <v-form-input label="Month" type="month" row colsize="2" value="2011-08" />
      <v-form-input label="Week" type="week" row colsize="2" value="2011-W33" />
      <v-form-input label="Time" type="time" row colsize="2" value="13:45:00" />
      <v-form-input label="Color" type="color" row colsize="2" value="#502382" />
    </example-container>

    <h2>Inline forms</h2>
    <example-container>
      <v-form inline>
        <v-form-input label="Name" type="text" placeholder="Jane Doe" srOnly/>

        <label class="sr-only" for="inlineFormInput">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">

        <label class="sr-only" for="inlineFormInputGroup">Username</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <div class="input-group-addon">@</div>
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
        </div>

        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Remember me
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </v-form>
    </example-container>

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
