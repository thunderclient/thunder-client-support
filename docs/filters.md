# Filters

- Function filters are useful to perform advanced data manipulation and the syntax is inspired from [Jinja Filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters)
- The filters can be used in `Environment Variables` and `Tests`
- The filter syntax is `{{variable | filter1 | filter2}}`

## Menu
- [Built-In Filters](#built-in-filters)
- [Filters In Env Variable](#filters-in-env-var)
- [Filters In Tests](#filters-in-tests)
- [Custom Filters](#custom-filters)


<a name="built-in-filters"></a>

### Built-In Filters:

<table style="width:100%">
<tr>
<td>abs</td> <td>add</td> <td >atob</td> <td >btoa</td>   <td>exec</td>  <td >first</td> 
</tr>
<tr>
   <td >hash</td> <td >hmac</td>  <td>join</td> <td >last</td> <td >length</td> <td >lower</td> 
</tr>
<tr>
     <td>map</td> <td >multiply</td> <td >removeQuotes</td> <td >replace</td>  <td>slice</td> <td >split</td> 
</tr>
<tr>
   <td >stringify</td>    <td >substring</td>      <td>subtract</td> <td >upper</td> <td ></td> <td ></td> 
</tr>
</table>

<a name="filters-in-env-var"></a>

#### Filters In Env Variable
- This is similar to `pre-request` scripting
<img width="900" alt="Screenshot 2022-11-17 at 09 45 15" src="https://user-images.githubusercontent.com/8637550/202413000-abe18411-13a1-47c0-a612-f3bc585b5bb0.png">

<a name="filters-in-tests"></a>

#### Filters In Tests
- This is similar to `post-request` scripting
<img width="900" alt="Screenshot 2022-11-17 at 09 56 57" src="https://user-images.githubusercontent.com/8637550/202415862-5e6d3712-a7c8-466b-8c7c-f91452ee4464.png">

<a name="custom-filters"></a>

### Custom Filters

- Create Javascript file with custom filters
- The sample custom filters javascript file [custom-filters.js](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js)
- The `tc` object types file [tc-types.d.ts](https://github.com/rangav/thunder-client-support/blob/master/docs/tc-types.d.ts)
<img width="701" alt="custom-filter" src="https://user-images.githubusercontent.com/8637550/202422492-30ad7123-0964-40db-ba1c-31bbe67d57f4.png">

- Attach Custom filters JS files to `Collection Settings`
<img width="900" alt="col-sets" src="https://user-images.githubusercontent.com/8637550/202426659-972f5307-0b51-4100-b6bf-0f3fb2f33140.png">

- Use Custom filters in Request
<img width="900" alt="custom-filter-using" src="https://user-images.githubusercontent.com/8637550/202422840-76998a57-0cbf-46ef-9309-52965c72959c.png">






