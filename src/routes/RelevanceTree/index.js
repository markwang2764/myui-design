import React from "react";
import { DyRelevanceTree } from "@dy.design";
const data = [
  {
    uid: "480304799460360192",
    ctype: "SYSGROUP",
    name: "DBAdm",
    children: [
      {
        uid: "480304799577800704",
        ctype: "SYSROLE",
        name: "dbAdm",
        children: [
          {
            uid: "601730029373620224",
            ctype: "SYSUSER",
            name: "321321",
            key: "603538512070836225"
          },
          {
            uid: "601718608543875072",
            ctype: "SYSUSER",
            name: "dfds",
            key: "601723989903015936"
          },
          {
            uid: "480304799640715264",
            ctype: "SYSUSER",
            name: "dydba",
            key: "480304800852869120"
          },
          {
            uid: "601726770726567936",
            ctype: "SYSUSER",
            name: "ejwqlejwqlj",
            key: "601726771183747072"
          },
          {
            uid: "601727569674371072",
            ctype: "SYSUSER",
            name: "w",
            key: "601727570068635648"
          }
        ]
      }
    ],
    key: "480304799460360192",
    project: false
  },
  {
    uid: "480304801788198912",
    ctype: "SYSGROUP",
    name: "Group Administrator",
    children: [],
    key: "480304801788198912",
    project: false
  },
  {
    uid: "605767120373940224",
    ctype: "SYSGROUP",
    name: "newTestGroup",
    children: [
      {
        uid: "603538432966262784",
        ctype: "SYSROLE",
        name: "3ffdsfdsfdsfsd",
        children: [],
        key: "605767840351387650"
      },
      {
        uid: "605767351123574784",
        ctype: "SYSROLE",
        name: "newTestRole",
        children: [
          {
            uid: "601045261866762240",
            ctype: "SYSUSER",
            name: "33",
            key: "605767880067252225"
          },
          {
            uid: "605767609467535360",
            ctype: "SYSUSER",
            name: "newTestUser",
            key: "605767609924714496"
          }
        ],
        key: "605767351257792512"
      }
    ],
    key: "605767120373940224",
    project: true
  },
  {
    uid: "565097735242383360",
    ctype: "SYSGROUP",
    name: "phone",
    children: [
      {
        uid: "565099531453071360",
        ctype: "SYSROLE",
        name: "Phone Administration",
        children: [
          {
            uid: "605763558424182784",
            ctype: "SYSUSER",
            name: "newUser",
            key: "605764034347663360"
          }
        ],
        key: "565099588927619072"
      }
    ],
    key: "565097735242383360",
    project: true
  },
  {
    uid: "480304801662369794",
    ctype: "SYSGROUP",
    name: "Project Administration",
    children: [
      {
        uid: "480304801733672960",
        ctype: "SYSROLE",
        name: "Project Administrator",
        children: [],
        key: "480304801750450176"
      }
    ],
    key: "480304801662369794",
    project: false
  },
  {
    uid: "480304801029029888",
    ctype: "SYSGROUP",
    name: "System Administrator",
    children: [
      {
        uid: "480304801058390016",
        ctype: "SYSROLE",
        name: "System Administrator",
        children: [
          {
            uid: "605767609467535360",
            ctype: "SYSUSER",
            name: "newTestUser",
            key: "606217650812485634"
          },
          {
            uid: "605763558424182784",
            ctype: "SYSUSER",
            name: "newUser",
            key: "605763559015579648"
          },
          {
            uid: "480304801154859008",
            ctype: "SYSUSER",
            name: "system",
            key: "480304801591066624"
          }
        ]
      }
    ],
    key: "480304801029029888",
    project: false
  },
  {
    uid: "499885286558269440",
    ctype: "SYSGROUP",
    name: "Workflow Administrator",
    children: [
      {
        uid: "499884769648050176",
        ctype: "SYSROLE",
        name: "Workflow Administrator",
        children: [],
        key: "606135540038762496"
      }
    ],
    key: "499885286558269440",
    project: false
  },
  {
    uid: "601358319604465664",
    ctype: "SYSGROUP",
    name: "事业部",
    children: [
      {
        uid: "601366797798604800",
        ctype: "SYSROLE",
        name: "通用事业部",
        children: [
          {
            uid: "601718129214619648",
            ctype: "SYSUSER",
            name: "323",
            key: "605440948813430785"
          },
          {
            uid: "565099722033856512",
            ctype: "SYSUSER",
            name: "markwang3",
            key: "605441043122356226"
          },
          {
            uid: "601726016011894784",
            ctype: "SYSUSER",
            name: "new users",
            key: "605441066648207362"
          },
          {
            uid: "601724788326531072",
            ctype: "SYSUSER",
            name: "wang",
            key: "605441087946883074"
          }
        ],
        key: "601366797798604801"
      },
      {
        uid: "567369391847505920",
        ctype: "SYSGROUP",
        name: "重载事业部",
        children: [
          {
            uid: "601417884354215936",
            ctype: "SYSROLE",
            name: "3r3",
            children: [
              {
                uid: "601722995852967936",
                ctype: "SYSUSER",
                name: "wang1",
                key: "601723066107559938"
              }
            ],
            key: "601417884354215937"
          },
          {
            uid: "601726313677455360",
            ctype: "SYSROLE",
            name: "rwqrwq",
            children: [
              {
                uid: "601045261866762240",
                ctype: "SYSUSER",
                name: "33",
                key: "605440985056411649"
              },
              {
                uid: "601776332526845952",
                ctype: "SYSUSER",
                name: "WANDSAJD",
                key: "603274554164379650"
              },
              {
                uid: "601727727287926784",
                ctype: "SYSUSER",
                name: "dsad",
                key: "601728096910966785"
              },
              {
                uid: "601046099871924224",
                ctype: "SYSUSER",
                name: "fdsafdsa",
                key: "605443510027419648"
              }
            ],
            key: "601726313744564224"
          }
        ],
        key: "567369391847505920",
        project: true
      }
    ],
    key: "601358319604465664",
    project: true
  }
];
export default class RelevanceTree extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  //   normal: "dy-button-normal",
  //   primary: "dy-button-primary",
  //   warning: "dy-button-warning",
  //   disabled: "dy-button-disabled",
  //   strong: "dy-button-strong",
  //   ghost: "dy-button-ghost",
  Copy = () => {
    var Url2 = document.getElementsByTagName("pre")[0].innerText;
    var oInput = document.createElement("textarea");
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("复制成功");
  };

  /**
   * @name:
   * @test:
   * @msg: 遍历初始值
   * @param {data:人员组织结构数据, index}
   * @return: [[groupid, roleid, useid],[groupid, roleid, useid],[groupid, roleid, useid]]
   */
  mapDefaultValue = initTargets => {
    let defaultValue = [];

    initTargets.forEach(v => {
      let newArray = [];
      for (let x in v) {
        newArray.push(v[x]);
      }
      defaultValue.push(newArray);
    });
    return defaultValue;
  };

  /**
   * @name:
   * @test:
   * @msg: 加入’0-1 0-0-1‘规则类型的key到数据
   * @param {data:人员组织结构数据, index}
   * @return: data with key
   */
  mapDataSource = (data, index) => {
    index = index || 0;
    return data.map((d, i) => ({
      ...d,
      key: index + "-" + i,
      name: d.name || d.objectName,
      children: d.children
        ? this.mapDataSource(d.children, index + "-" + i)
        : null
    }));
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "500px" }}>
          <DyRelevanceTree
            onSelect={value => {
              console.log(value);
              //   this.setState({ targetData: value });
              //   this.props.onChange(value);
            }}
            dataSource={this.mapDataSource(data)}
            fleidName={{ title: "name", value: "uid", key: "key" }}
            defaultValue={[
              ["565097735242383360", "565099531453071360", "605763558424182784"]
            ]}
            nodeStyle={{ color: "#004669" }}
          />
        </div>

        <div className="codePlace">
          <pre
            dangerouslySetInnerHTML={{
              __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { RelevanceTree } from "@dy.design";
    const data = [
        {
          uid: "480304799460360192",
          ctype: "SYSGROUP",
          name: "DBAdm",
          children: [
            {
              uid: "480304799577800704",
              ctype: "SYSROLE",
              name: "dbAdm",
              children: [
                {
                  uid: "601730029373620224",
                  ctype: "SYSUSER",
                  name: "321321",
                  key: "603538512070836225"
                },
                {
                  uid: "601718608543875072",
                  ctype: "SYSUSER",
                  name: "dfds",
                  key: "601723989903015936"
                },
                {
                  uid: "480304799640715264",
                  ctype: "SYSUSER",
                  name: "dydba",
                  key: "480304800852869120"
                },
                {
                  uid: "601726770726567936",
                  ctype: "SYSUSER",
                  name: "ejwqlejwqlj",
                  key: "601726771183747072"
                },
                {
                  uid: "601727569674371072",
                  ctype: "SYSUSER",
                  name: "w",
                  key: "601727570068635648"
                }
              ]
            }
          ],
          key: "480304799460360192",
          project: false
        },
        {
          uid: "480304801788198912",
          ctype: "SYSGROUP",
          name: "Group Administrator",
          children: [],
          key: "480304801788198912",
          project: false
        },
        {
          uid: "605767120373940224",
          ctype: "SYSGROUP",
          name: "newTestGroup",
          children: [
            {
              uid: "603538432966262784",
              ctype: "SYSROLE",
              name: "3ffdsfdsfdsfsd",
              children: [],
              key: "605767840351387650"
            },
            {
              uid: "605767351123574784",
              ctype: "SYSROLE",
              name: "newTestRole",
              children: [
                {
                  uid: "601045261866762240",
                  ctype: "SYSUSER",
                  name: "33",
                  key: "605767880067252225"
                },
                {
                  uid: "605767609467535360",
                  ctype: "SYSUSER",
                  name: "newTestUser",
                  key: "605767609924714496"
                }
              ],
              key: "605767351257792512"
            }
          ],
          key: "605767120373940224",
          project: true
        },
        {
          uid: "565097735242383360",
          ctype: "SYSGROUP",
          name: "phone",
          children: [
            {
              uid: "565099531453071360",
              ctype: "SYSROLE",
              name: "Phone Administration",
              children: [
                {
                  uid: "605763558424182784",
                  ctype: "SYSUSER",
                  name: "newUser",
                  key: "605764034347663360"
                }
              ],
              key: "565099588927619072"
            }
          ],
          key: "565097735242383360",
          project: true
        },
        {
          uid: "480304801662369794",
          ctype: "SYSGROUP",
          name: "Project Administration",
          children: [
            {
              uid: "480304801733672960",
              ctype: "SYSROLE",
              name: "Project Administrator",
              children: [],
              key: "480304801750450176"
            }
          ],
          key: "480304801662369794",
          project: false
        },
        {
          uid: "480304801029029888",
          ctype: "SYSGROUP",
          name: "System Administrator",
          children: [
            {
              uid: "480304801058390016",
              ctype: "SYSROLE",
              name: "System Administrator",
              children: [
                {
                  uid: "605767609467535360",
                  ctype: "SYSUSER",
                  name: "newTestUser",
                  key: "606217650812485634"
                },
                {
                  uid: "605763558424182784",
                  ctype: "SYSUSER",
                  name: "newUser",
                  key: "605763559015579648"
                },
                {
                  uid: "480304801154859008",
                  ctype: "SYSUSER",
                  name: "system",
                  key: "480304801591066624"
                }
              ]
            }
          ],
          key: "480304801029029888",
          project: false
        },
        {
          uid: "499885286558269440",
          ctype: "SYSGROUP",
          name: "Workflow Administrator",
          children: [
            {
              uid: "499884769648050176",
              ctype: "SYSROLE",
              name: "Workflow Administrator",
              children: [],
              key: "606135540038762496"
            }
          ],
          key: "499885286558269440",
          project: false
        },
        {
          uid: "601358319604465664",
          ctype: "SYSGROUP",
          name: "事业部",
          children: [
            {
              uid: "601366797798604800",
              ctype: "SYSROLE",
              name: "通用事业部",
              children: [
                {
                  uid: "601718129214619648",
                  ctype: "SYSUSER",
                  name: "323",
                  key: "605440948813430785"
                },
                {
                  uid: "565099722033856512",
                  ctype: "SYSUSER",
                  name: "markwang3",
                  key: "605441043122356226"
                },
                {
                  uid: "601726016011894784",
                  ctype: "SYSUSER",
                  name: "new users",
                  key: "605441066648207362"
                },
                {
                  uid: "601724788326531072",
                  ctype: "SYSUSER",
                  name: "wang",
                  key: "605441087946883074"
                }
              ],
              key: "601366797798604801"
            },
            {
              uid: "567369391847505920",
              ctype: "SYSGROUP",
              name: "重载事业部",
              children: [
                {
                  uid: "601417884354215936",
                  ctype: "SYSROLE",
                  name: "3r3",
                  children: [
                    {
                      uid: "601722995852967936",
                      ctype: "SYSUSER",
                      name: "wang1",
                      key: "601723066107559938"
                    }
                  ],
                  key: "601417884354215937"
                },
                {
                  uid: "601726313677455360",
                  ctype: "SYSROLE",
                  name: "rwqrwq",
                  children: [
                    {
                      uid: "601045261866762240",
                      ctype: "SYSUSER",
                      name: "33",
                      key: "605440985056411649"
                    },
                    {
                      uid: "601776332526845952",
                      ctype: "SYSUSER",
                      name: "WANDSAJD",
                      key: "603274554164379650"
                    },
                    {
                      uid: "601727727287926784",
                      ctype: "SYSUSER",
                      name: "dsad",
                      key: "601728096910966785"
                    },
                    {
                      uid: "601046099871924224",
                      ctype: "SYSUSER",
                      name: "fdsafdsa",
                      key: "605443510027419648"
                    }
                  ],
                  key: "601726313744564224"
                }
              ],
              key: "567369391847505920",
              project: true
            }
          ],
          key: "601358319604465664",
          project: true
        }
      ];

    class RelevanceTree extends React.PureComponent {
       

        /**
         * @name:
         * @test:
         * @msg: 遍历初始值
         * @param {data:人员组织结构数据, index}
         * @return: [[groupid, roleid, useid],[groupid, roleid, useid],[groupid, roleid, useid]]
         */
        mapDefaultValue = initTargets => {
          let defaultValue = [];
      
          initTargets.forEach(v => {
            let newArray = [];
            for (let x in v) {
              newArray.push(v[x]);
            }
            defaultValue.push(newArray);
          });
          return defaultValue;
        };
      
        /**
         * @name:
         * @test:
         * @msg: 加入’0-1 0-0-1‘规则类型的key到数据
         * @param {data:人员组织结构数据, index}
         * @return: data with key
         */
        mapDataSource = (data, index) => {
          index = index || 0;
          return data.map((d, i) => ({
            ...d,
            key: index + "-" + i,
            name: d.name || d.objectName,
            children: d.children
              ? this.mapDataSource(d.children, index + "-" + i)
              : null
          }));
        };

        render(){
            return   <DyRelevanceTree
                        onSelect={value => {
                        console.log(value);
                        //   this.setState({ targetData: value });
                        //   this.props.onChange(value);
                        }}
                        dataSource={this.mapDataSource(data)}
                        fleidName={{ title: "name", value: "uid", key: "key" }}
                        defaultValue={[
                        ["565097735242383360", "565099531453071360", "605763558424182784"]
                        ]}
                        nodeStyle={{ color: "#004669" }}
                    />
        }
    }

    ReactDOM.render(<RelevanceTree />, DomNode);
            `)
            }}
          />
          <button onClick={() => this.Copy()}>复制</button>
        </div>
        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">onSelect: 选中事件</div>
        <div className="desc">dataSource: 参照我们的组织结构数据</div>
        <div className="desc">fleidName: 指定数据的字段名称</div>
        <div className="desc">defaultValue: 初始默认值</div>
      </React.Fragment>
    );
  }
}
