

RAII - 
    ResourceAcquisition is Initilizatin

Resource is tied to an object
    1. handle on the stack
    2. created in constructor
    3. deleted in the destructor
    4. rule of three/Five(c11 intro move semantic)
        1. destructor
        2. copy constructor
        3. copy assignment operator
        4. move constrctor
        5. move assignment operator


unique pointer
    three ways to create:
    1. std::make_unique<T> - helper function  :
        std::unique_ptr<foo>(p1, p2)
    2. Constructor - passing raw pointer to 
        std::unique_ptr<foo> a (new foo())
    3. .reset(T* ptr) - call reset on an existing pointer
        std::unique_ptr<foo> a;
        a.reset(new Foo());

    using:
        Get
            foo * contents = a.get()
            a->bar() 
            a.get()->bar()

        delete memory/content
            a.reset()

        check if empty
            if(a){

            }
    passing:
        1. passing is moving -making the pointer in the calling scope Empty
            my_function(std::move(a))
        2. passing - const reference to make sure that pointer will not be deleted

shared pointer:
    * reference counting => when all shared pointer go out of scope => delete the raw pointer   
    * share pointer is movable
    * copyable => compiler generate the copy constructor and copy assignment operator

    Three ways to create:
    1. helper => std::make_shared<Foo>();
    2. constructor from raw pointer => std::shared_ptr<Foo> a( new Foo())
    3. reset => .reset(T *ptr)

    using :
    1. get
    2. reset => deleteing
    3. check => if(a)

    casting:
    * auto b = std::dynamic_pointer_cast<bar> (a);
    * static_pointer_cast<bar> (a)
    * const_cast<bar> (a)

    drawback:
    circle of dependncies => need weak pointer to solve.


weak pointer:
    feature:
        non-owning reference to shared pointer.
        if shared pointer go out of scope and only weak pointer are left => delete pointer
        copyable like shared pointer.
        must convert to shared_ptr before use.

    create weak pointer:
        auto s = make_shared<Foo>();
        std::weak_ptr<Foo> w = a;      // copy a shared pointer to weaker pointer


    two way of convert:
        1. lock()
            shared_ptr<Foo> s = w.lock();   // possible return empty
            
        2. constrcutor of shared pointer from weak pointer
            auto s = std::share_ptr<Foo> (w);   // possible throw exception


vector:
    replace new[] /delete[]
    contiguos memory - access by []
    size : v.size()
    capacity: v.reserve(5000)
    can resize
    template


    create:
        std::vector<Foo> v[123];

    access: 
        v[100]
    append:
        v.push_back()
    get pointer:
        Foo* contents = v.data()





